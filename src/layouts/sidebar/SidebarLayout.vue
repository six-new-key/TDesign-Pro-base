<template>
  <!-- 侧边栏布局 -->
  <t-layout class="sidebar-layout">
    <!-- 左侧：侧边导航 -->
    <Sidebar />

    <!-- 右侧：Header + 主内容区域 -->
    <t-layout class="right-layout">
      <!-- 顶部导航 -->
      <Header />

      <!-- 内容区域 -->
      <t-content class="main-content">
        <router-view v-slot="{ Component, route }">
          <transition name="page-transition" mode="out-in">
            <component :is="Component" :key="`${route.path}-${componentKey}`" />
          </transition>
        </router-view>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup>
import { watch, nextTick, ref } from 'vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()

// 控制组件重新渲染的key
const componentKey = ref(0)

// 监听刷新状态
watch(
  () => appStore.shouldRefresh,
  (shouldRefresh) => {
    if (shouldRefresh) {
      // 使用nextTick确保在下一个DOM更新周期重新渲染组件
      nextTick(() => {
        componentKey.value += 1
        // 重置刷新状态
        appStore.resetRefresh()
      })
    }
  }
)
</script>

<style scoped>
.sidebar-layout {
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
  overflow: auto;
  max-height: calc(100vh - 140px);
  overflow-y: scroll;
}

/* 页面切换动画 - 舒适的淡入淡出效果 */
.page-transition-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-transition-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-5px) scale(1.02);
}
</style>