import { Message } from '@arco-design/web-vue'

// 用于存储已显示的消息，避免重复显示
const messageMap = new Map()

// 生成消息的唯一标识
const generateMessageKey = (type, content) => {
  return `${type}_${content}`
}

// 清理过期的消息记录
const cleanExpiredMessages = () => {
  const now = Date.now()
  for (const [key, data] of messageMap.entries()) {
    if (now > data.expireTime) {
      messageMap.delete(key)
    }
  }
}

// 封装的Message对象
const CustomMessage = {
  info(options) {
    const content = typeof options === 'string' ? options : options.content
    const duration = typeof options === 'object' ? options.duration || 3000 : 3000
    const key = generateMessageKey('info', content)
    
    cleanExpiredMessages()
    
    if (!messageMap.has(key)) {
      const expireTime = Date.now() + duration
      messageMap.set(key, { expireTime })
      return Message.info(options)
    }
  },
  
  success(options) {
    const content = typeof options === 'string' ? options : options.content
    const duration = typeof options === 'object' ? options.duration || 3000 : 3000
    const key = generateMessageKey('success', content)
    
    cleanExpiredMessages()
    
    if (!messageMap.has(key)) {
      const expireTime = Date.now() + duration
      messageMap.set(key, { expireTime })
      return Message.success(options)
    }
  },
  
  warning(options) {
    const content = typeof options === 'string' ? options : options.content
    const duration = typeof options === 'object' ? options.duration || 3000 : 3000
    const key = generateMessageKey('warning', content)
    
    cleanExpiredMessages()
    
    if (!messageMap.has(key)) {
      const expireTime = Date.now() + duration
      messageMap.set(key, { expireTime })
      return Message.warning(options)
    }
  },
  
  error(options) {
    const content = typeof options === 'string' ? options : options.content
    const duration = typeof options === 'object' ? options.duration || 3000 : 3000
    const key = generateMessageKey('error', content)
    
    cleanExpiredMessages()
    
    if (!messageMap.has(key)) {
      const expireTime = Date.now() + duration
      messageMap.set(key, { expireTime })
      return Message.error(options)
    }
  },
  
  loading(options) {
    const content = typeof options === 'string' ? options : options.content
    const duration = typeof options === 'object' ? options.duration || 3000 : 3000
    const key = generateMessageKey('loading', content)
    
    cleanExpiredMessages()
    
    if (!messageMap.has(key)) {
      const expireTime = Date.now() + duration
      messageMap.set(key, { expireTime })
      return Message.loading(options)
    }
  },
  
  // 清除所有消息
  clear() {
    messageMap.clear()
    return Message.clear()
  },
  
  // 手动清理过期消息记录
  cleanExpired() {
    cleanExpiredMessages()
  }
}

export default CustomMessage