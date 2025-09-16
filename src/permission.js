import router from "@/router";
import { useUserStore } from "@/store/modules/user";
import { GET_TOKEN } from "@/store/modules/token";
import { NProgress, initNProgress } from '@/utils/nprogress'

// 初始化NProgress配置
initNProgress()

// 白名单路由
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const userStore = useUserStore();
  const token = GET_TOKEN();

  if (token) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      if (userStore.userInfo) {
        next();
      } else {
        try {
          // 获取用户信息
          await userStore.getUserInfo();

          next({ ...to, replace: true });
        } catch (error) {
          userStore.logout();
          next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});

// 路由后置守卫
router.afterEach((to) => {
  // 结束进度条
  NProgress.done();

  // 更新页面标题
  const title = to.meta?.title || "TDesign Pro";
  document.title = title;
});

export default router;
