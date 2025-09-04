import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes, asyncRoutes, anyRoutes } from './routes'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [...constantRoutes, ...asyncRoutes, ...anyRoutes],
  // 路由滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router