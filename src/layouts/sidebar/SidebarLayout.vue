<template>
  <!-- 正常布局 -->
  <t-layout class="main-layout">
    <!-- 左侧：侧边导航 -->
    <Sidebar />

    <!-- 右侧：Header + 主内容区域 -->
    <t-layout class="right-layout">
      <!-- 顶部导航 -->
      <Header />

      <!-- 内容区域 -->
      <t-content class="main-content">
        <!-- 刷新loading状态 -->
        <div v-if="isRefreshing" class="refresh-loading">
          <t-loading text="刷新中..." />
        </div>
        <!-- 正常内容区域 -->
        <transition v-else :enter-active-class="`animate__animated ${getEnterAnimation}`"
          :leave-active-class="`animate__animated ${getLeaveAnimation}`">
          <router-view :key="routerViewKey" />
        </transition>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup>
import { watch, nextTick, ref, computed } from 'vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import { useAppStore } from '@/store/modules/app'
import { PAGE_ANIMATIONS } from '@/store/modules/app'

const appStore = useAppStore()

// 刷新状态管理
const isRefreshing = ref(false)
const routerViewKey = ref(0)

// 动画效果计算属性
const getEnterAnimation = computed(() => {
  switch (appStore.currentPageAnimation) {
    case PAGE_ANIMATIONS.SLIDE_LEFT:
      return 'animate__backInLeft'
    case PAGE_ANIMATIONS.SLIDE_RIGHT:
      return 'animate__backInRight'
    case PAGE_ANIMATIONS.SLIDE_UP:
      return 'animate__backInUp'
    case PAGE_ANIMATIONS.SLIDE_DOWN:
      return 'animate__backInDown'
    case PAGE_ANIMATIONS.FADE:
      return 'animate__fadeIn'
    case PAGE_ANIMATIONS.ZOOM:
      return 'animate__zoomIn'
    case PAGE_ANIMATIONS.FLIP:
      return 'animate__flipInY'
    case PAGE_ANIMATIONS.BOUNCE:
      return 'animate__bounceIn'
    default:
      return 'animate__backInLeft'
  }
})

const getLeaveAnimation = computed(() => {
  switch (appStore.currentPageAnimation) {
    case PAGE_ANIMATIONS.SLIDE_LEFT:
      return 'animate__backOutRight'
    case PAGE_ANIMATIONS.SLIDE_RIGHT:
      return 'animate__backOutLeft'
    case PAGE_ANIMATIONS.SLIDE_UP:
      return 'animate__backOutDown'
    case PAGE_ANIMATIONS.SLIDE_DOWN:
      return 'animate__backOutUp'
    case PAGE_ANIMATIONS.FADE:
      return 'animate__fadeOut'
    case PAGE_ANIMATIONS.ZOOM:
      return 'animate__zoomOut'
    case PAGE_ANIMATIONS.FLIP:
      return 'animate__flipOutY'
    case PAGE_ANIMATIONS.BOUNCE:
      return 'animate__bounceOut'
    default:
      return 'animate__backOutRight'
  }
})

// 监听刷新状态
watch(
  () => appStore.shouldRefresh,
  (shouldRefresh) => {
    if (shouldRefresh) {
      // 执行页面刷新
      handlePageRefresh()
      // 重置刷新状态
      appStore.resetRefresh()
    }
  }
)

// 处理页面刷新
const handlePageRefresh = async () => {
  // 显示刷新加载状态
  isRefreshing.value = true

  // 等待一小段时间让用户看到刷新提示
  await new Promise(resolve => setTimeout(resolve, 300))

  // 更新router-view的key来强制重新渲染组件
  routerViewKey.value += 1

  // 等待DOM更新完成
  await nextTick()

  // 隐藏刷新加载状态
  isRefreshing.value = false
}
</script>

<style scoped>
.main-layout {
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
}

.right-layout {
  height: 100vh;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.main-content {
  background: var(--td-bg-color-page);
  padding: 20px;
  overflow-y: auto;
  height: 100%;
}

.refresh-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>