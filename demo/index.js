// 统一导出封装的组件
import CustomMessage from './message.js'
import CustomNotification from './notification.js'

export { CustomMessage as Message, CustomNotification as Notification }

// 默认导出
export default {
  Message: CustomMessage,
  Notification: CustomNotification
}