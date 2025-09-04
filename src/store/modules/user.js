import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { SET_TOKEN, REMOVE_TOKEN } from "./token";

export const useUserStore = defineStore(
  "user",
  () => {
    // state
    const userInfo = ref(null);

    // actions
    const setUserInfo = (info) => {
      userInfo.value = info;
    };

    //模拟登录
    const login = async (user) => {
      await setUserInfo(user);
      // 登录成功后，将token存储到localStorage
      //随机生成token字符串
      const token = Math.random().toString(36).substring(2);
      // 登录成功后，将token存储到localStorage
      SET_TOKEN(token);

      return {code:200,msg:'登录成功'}
    };

    //模拟获取用户信息
    const getUserInfo = async () => {
      return userInfo.value;
    };

    const logout = async () => {
      // 清除用户信息
      userInfo.value = null;
      // 清除token
      REMOVE_TOKEN();

      // 这里可以添加调用后端退出登录API的逻辑
      // try {
      //   await api.logout()
      // } catch (error) {
      //   console.error('调用退出登录API失败:', error)
      // }
    };

    return {
      userInfo,
      setUserInfo,
      login,
      getUserInfo,
      logout,
    };
  },
  {
    persist: {
      key: "user-store",
      storage: localStorage,
      //只有添加到里面才会持久化
      paths: ["userInfo"],
    },
  }
);
