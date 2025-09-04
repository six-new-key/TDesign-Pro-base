import router from "@/router";
import { useUserStore } from "@/store/modules/user";
import { GET_TOKEN } from "@/store/modules/token";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 配置NProgress
NProgress.configure({
  showSpinner: false, // 不显示加载图标
  minimum: 0.2, // 最小百分比
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
});

// 白名单路由
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const userStore = useUserStore();
  const token = GET_TOKEN();

  if (token) {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
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
