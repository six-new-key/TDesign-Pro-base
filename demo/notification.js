import { Notification } from '@arco-design/web-vue'

// 用于存储已显示的通知，避免重复显示
const notificationMap = new Map()

// 生成通知的唯一标识
const generateNotificationKey = (type, title, content) => {
  return `${type}_${title}_${content}`
}

// 清理过期的通知记录
const cleanExpiredNotifications = () => {
  const now = Date.now()
  for (const [key, data] of notificationMap.entries()) {
    if (now > data.expireTime) {
      notificationMap.delete(key)
    }
  }
}

// 封装的Notification对象
const CustomNotification = {
  info(options) {
    const { title = '', content = '', duration = 3000 } = options || {}
    const key = generateNotificationKey('info', title, content)
    
    cleanExpiredNotifications()
    
    if (!notificationMap.has(key)) {
      const expireTime = Date.now() + duration
      notificationMap.set(key, { expireTime })
      return Notification.info(options)
    }
  },
  
  success(options) {
    const { title = '', content = '', duration = 3000 } = options || {}
    const key = generateNotificationKey('success', title, content)
    
    cleanExpiredNotifications()
    
    if (!notificationMap.has(key)) {
      const expireTime = Date.now() + duration
      notificationMap.set(key, { expireTime })
      return Notification.success(options)
    }
  },
  
  warning(options) {
    const { title = '', content = '', duration = 3000 } = options || {}
    const key = generateNotificationKey('warning', title, content)
    
    cleanExpiredNotifications()
    
    if (!notificationMap.has(key)) {
      const expireTime = Date.now() + duration
      notificationMap.set(key, { expireTime })
      return Notification.warning(options)
    }
  },
  
  error(options) {
    const { title = '', content = '', duration = 3000 } = options || {}
    const key = generateNotificationKey('error', title, content)
    
    cleanExpiredNotifications()
    
    if (!notificationMap.has(key)) {
      const expireTime = Date.now() + duration
      notificationMap.set(key, { expireTime })
      return Notification.error(options)
    }
  },
  
  // 通用方法
  open(options) {
    const { type = 'info', title = '', content = '', duration = 3000 } = options || {}
    const key = generateNotificationKey(type, title, content)
    
    cleanExpiredNotifications()
    
    if (!notificationMap.has(key)) {
      const expireTime = Date.now() + duration
      notificationMap.set(key, { expireTime })
      return Notification.open(options)
    }
  },
  
  // 清除所有通知
  clear() {
    notificationMap.clear()
    return Notification.clear()
  },
  
  // 关闭指定通知
  close(key) {
    return Notification.close(key)
  },
  
  // 手动清理过期通知记录
  cleanExpired() {
    cleanExpiredNotifications()
  }
}

export default CustomNotification