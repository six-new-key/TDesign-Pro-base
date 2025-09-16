<template>
  <div class="dashboard">
    <h1>控制台</h1>
    <t-button type="primary" @click="handleMsg">测试msg</t-button>
    <t-button type="primary" @click="handleNotification">测试notification</t-button>
  </div>
</template>

<script setup>
import { Message, Notification } from '@/utils/ui'
import { ref } from 'vue'

const notification = ref('')

const handleMsg = () => {
  Message.success({
    content: '表单提交成功',
    duration: 2000
  })
}

const handleNotification = () => {
  Notification.success({
    title: '成功',
    content: notification.value
  })
}

</script>

<style scoped>
.dashboard {
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #333;
}
</style>