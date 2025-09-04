

# 微信公众号管理后台系统

一个基于 Vue 3 + Vite + TDesign 构建的现代化后台权限管理系统，提供完整的用户管理、角色管理、菜单管理等功能。

## ✨ 特性

- 🚀 **现代化技术栈**：基于 Vue 3 + Vite + TDesign 构建
- 📱 **响应式设计**：完美适配桌面端
- 🎨 **主题切换**：支持明暗主题切换
- 🔍 **全局搜索**：快速搜索功能，支持键盘快捷键
- 📑 **页面标签**：多标签页管理，提升操作效率
- 🔐 **权限管理**：完整的用户权限控制系统
- 💾 **状态持久化**：基于 Pinia 的状态管理和持久化
- 🎯 **组件化开发**：高度模块化的组件架构

## 核心技术栈

- **前端框架**: Vue 3.x (Composition API)
- **构建工具**: Vite 4.x
- **UI 组件库**: TDesign Vue Next
- **HTTP 客户端**: Axios 1.7.9
- **状态管理**: Pinia + pinia-plugin-persistedstate
- **路由管理**: Vue Router 4.x
- **图标系统**: vite-plugin-svg-icons
- **开发工具**: unplugin-auto-import, unplugin-vue-components

## 📁 项目结构

```
src/
├── api/                # API 接口管理
│   ├── user/           # 用户管理接口
│   │   └── index.js    # 用户 CRUD 接口
│   ├── role/           # 角色管理接口
│   │   └── index.js    # 角色 CRUD 接口
│   ├── menu/           # 菜单管理接口
│   │   └── index.js    # 菜单 CRUD 接口
│   ├── dictData/       # 字典数据接口
│   │   └── index.js    # 字典数据 CRUD 接口
│   ├── dictType/       # 字典类型接口
│   │   └── index.js    # 字典类型 CRUD 接口
├── components/          # 自定义组件
│   ├── custom/         # 通用自定义组件
│   ├── lock-screen/    # 锁屏相关组件
│   ├── page-tags/      # 页面标签组件
│   └── search-dialog/  # 搜索对话框组件
├── layout/             # 布局组件
│   ├── MainLayout.vue  # 主布局
│   ├── Header.vue      # 顶部导航
│   └── Sidebar.vue     # 侧边栏
├── router/             # 路由配置
│   ├── index.js        # 路由实例
│   └── routes.js       # 路由定义
├── store/              # 状态管理
│   ├── index.js        # Pinia 实例
│   └── modules/        # Store 模块
├── utils/              # 工具函数
│   ├── request.js      # HTTP 请求封装
│   └── theme.js        # 主题工具函数
├── views/              # 页面组件
├── plugins/            # 自定义插件
├── assets/             # 静态资源
├── style.css           # 全局样式
├── App.vue             # 根组件
└── main.js             # 应用入口
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发环境运行

```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看应用

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 预览生产版本

```bash
npm run preview
# 或
yarn preview
```

## 🔧 配置说明

### 环境变量

#### 开发环境 (.env.development)

```env
NODE_ENV = 'development'
VITE_APP_BASE_API = '/api'
VITE_DEV_SERVE = 'http://localhost:9101'
```

#### 生产环境 (.env.production)

```env
NODE_ENV = 'production'
VITE_APP_BASE_API = '/api'
VITE_PROD_SERVE = 'http://localhost:9900'
```

### Vite 配置特性

- **路径别名**：`@` 指向 `src` 目录
- **自动导入**：TDesign 组件和 API 自动导入
- **SVG 图标**：支持 SVG 图标自动注册
- **开发代理**：API 请求代理到后端服务

## 🎨 UI 特性

### 主题系统

- **明暗主题切换**：支持 light/dark 主题
- **侧边栏主题**：独立的侧边栏主题配置
- **主题持久化**：主题选择自动保存

### 布局特性

- **响应式布局**：适配不同屏幕尺寸
- **侧边栏折叠**：可折叠的导航菜单
- **面包屑导航**：清晰的页面层级导航
- **页面标签**：多标签页管理
- **全屏模式**：支持全屏显示

### 交互特性

- **全局搜索**：Ctrl+K 快捷键唤起搜索
- **页面切换动画**：流畅的页面过渡效果
- **加载状态**：友好的加载提示
- **错误处理**：完善的错误提示机制

## 自定义组件详解

### 1. SvgIcon 组件

**位置**: `src/components/custom/SvgIcon.vue`

**功能**: 统一的 SVG 图标组件，支持动态图标渲染和样式定制。

**Props**:

- `prefix` (String): xlink:href 属性值前缀，默认 '#icon-'
- `name` (String): SVG 图标名称
- `color` (String): 图标颜色
- `width` (String): 图标宽度，默认 '45px'
- `height` (String): 图标高度，默认 '45px'

**使用方法**:

```vue
<template>
  <!-- 基础使用 -->
  <SvgIcon name="home" />
  
  <!-- 自定义样式 -->
  <SvgIcon 
    name="user" 
    width="24px" 
    height="24px" 
    color="#1890ff" 
  />
</template>
```

**实现原理**:

- 使用 `vite-plugin-svg-icons` 插件自动注册 SVG 图标
- 通过 `use` 标签引用 SVG sprite 中的图标
- 支持动态样式绑定和颜色定制

### 2. UserDropdown 组件

**位置**: `src/components/custom/UserDropdown.vue`

**功能**: 用户信息下拉菜单，包含用户信息展示、快捷操作和系统功能。

**主要功能**:

- 用户头像和信息展示
- 快捷菜单（文档、GitHub、帮助等）
- 锁定屏幕功能
- 退出登录功能
- 键盘快捷键支持（Alt+L 锁屏，Alt+Q 退出）
- 点击外部区域自动关闭

**使用方法**:

```vue
<template>
  <UserDropdown />
</template>
```

**核心方法**:

- `toggleDropdown()`: 切换下拉菜单显示状态
- `handleMenuClick(item)`: 处理菜单项点击事件
- `handleLockScreen()`: 触发锁屏功能
- `handleLogout()`: 处理用户退出登录

### 3. LockScreenDialog 组件

**位置**: `src/components/lock-screen/LockScreenDialog.vue`

**功能**: 锁屏密码输入对话框，用于设置锁屏密码。

**Props**:

- `modelValue` (Boolean): 对话框显示状态

**Events**:

- `update:modelValue`: 更新显示状态
- `locked`: 锁定完成事件，传递锁定信息

**使用方法**:

```vue
<template>
  <LockScreenDialog 
    v-model="showDialog" 
    @locked="handleLocked" 
  />
</template>

<script setup>
const showDialog = ref(false)
const handleLocked = (lockData) => {
  console.log('锁屏设置完成:', lockData)
}
</script>
```

### 4. FullScreenLock 组件

**位置**: `src/components/lock-screen/FullScreenLock.vue`

**功能**: 全屏锁定界面，显示时钟和解锁功能。

**主要特性**:

- 实时时钟显示（24小时制）
- 日期和星期显示
- 密码解锁功能
- 优雅的动画效果
- 响应式设计

**核心方法**:

- `updateTime()`: 更新时间显示
- `handleUnlock()`: 处理解锁操作
- `startClock()` / `stopClock()`: 控制时钟更新

### 5. PageTags 组件

**位置**: `src/components/page-tags/PageTags.vue`

**功能**: 页面标签管理，提供多标签页导航功能。

**主要特性**:

- 动态页面标签生成
- 标签关闭功能（首页标签不可关闭）
- 水平滚动支持
- 滚动按钮显示/隐藏
- 自动滚动到当前激活标签
- 响应式布局

**核心方法**:

- `addPageTag(path, title)`: 添加页面标签
- `removePageTag(path)`: 移除页面标签
- `navigateToPage(path)`: 导航到指定页面
- `scrollToActiveTag()`: 滚动到激活标签

**使用方法**:

```vue
<template>
  <PageTags />
</template>
```

### 6. SearchDialog 组件

**位置**: `src/components/search-dialog/SearchDialog.vue`

**功能**: 全局搜索对话框，支持菜单项快速搜索和导航。

**Props**:

- `modelValue` (Boolean): 对话框显示状态

**主要特性**:

- 实时搜索功能
- 键盘快捷键支持（Ctrl+K 打开）
- ESC 键关闭
- 搜索结果高亮显示
- 点击结果直接导航

**使用方法**:

```vue
<template>
  <SearchDialog v-model="showSearch" />
</template>

<script setup>
const showSearch = ref(false)

// 通过 ref 调用组件方法
const searchDialogRef = ref()
const openSearch = () => {
  searchDialogRef.value.open()
}
</script>
```

## 布局系统详解

### MainLayout 主布局

**位置**: `src/layout/MainLayout.vue`

**功能**: 应用主布局容器，管理整体布局结构和页面切换。

**主要特性**:

- 锁屏状态检测和切换
- 页面切换动画
- 组件强制刷新机制
- 响应式布局

**布局结构**:

```
┌─────────────────────────────────────┐
│  FullScreenLock (锁屏时显示)          │
├─────────────┬───────────────────────┤
│             │  Header (顶部导航)      │
│  Sidebar    ├───────────────────────┤
│  (侧边栏)    │                      │
│             │  Main Content        │
│             │  (主内容区域)          │
│             │                      │
└─────────────┴───────────────────────┘
```

### Header 顶部导航

**位置**: `src/layout/Header.vue`

**功能**: 顶部导航栏，包含面包屑、搜索、主题切换等功能。

**主要组件**:

- 面包屑导航
- 搜索触发器
- 刷新按钮
- 主题切换按钮
- 全屏切换按钮
- 用户下拉菜单
- 页面标签组件

**核心方法**:

- `openSearchDialog()`: 打开搜索对话框
- `handleRefresh()`: 触发页面刷新
- `toggleFullscreen()`: 切换全屏模式
- `toggleGlobalTheme()`: 切换全局主题

### Sidebar 侧边栏

**位置**: `src/layout/Sidebar.vue`

**功能**: 侧边导航菜单，支持多层级菜单和主题切换。

**主要特性**:

- 动态菜单渲染（支持1-3层菜单）
- 菜单折叠/展开
- 菜单主题切换
- 路由激活状态同步
- Logo 和系统标题显示

**菜单层级支持**:

- **一层菜单**: 直接页面链接
- **二层菜单**: 带子菜单的分组
- **三层菜单**: 嵌套子菜单结构

**核心方法**:

- `toggleSidebar()`: 切换侧边栏折叠状态
- `toggleSidebarTheme()`: 切换菜单主题
- `handleMenuChange(value)`: 处理菜单点击事件
- `hasThirdLevel(route)`: 判断是否有三层菜单



## 📦 状态管理

项目使用 **Pinia** 进行状态管理，配合 `pinia-plugin-persistedstate` 实现状态持久化。

### App Store (`useAppStore`)

**管理应用全局状态和配置**

**状态属性：**

```javascript
{
  title: '微信公众号管理系统',        // 应用标题
  theme: 'light',                    // 主题模式 (light/dark)
  sidebarTheme: 'light',            // 侧边栏主题
  isPageRefreshing: false,          // 页面刷新状态
  menuItems: [],                    // 菜单项列表
  isLocked: false,                  // 锁屏状态
  lockPassword: ''                  // 锁屏密码
}
```

**主要方法：**

```javascript
// 设置应用标题
setTitle(title)

// 切换主题
toggleTheme()
setTheme(theme)

// 侧边栏主题管理
toggleSidebarTheme()
setSidebarTheme(theme)

// 页面刷新控制
setPageRefreshing(status)

// 菜单管理
setMenuItems(items)

// 锁屏功能
lockScreen(password)
unlockScreen()
```

**使用示例：**

```javascript
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()

// 切换主题
appStore.toggleTheme()

// 设置菜单
appStore.setMenuItems(menuData)

// 锁定屏幕
appStore.lockScreen('123456')
```

### User Store (`useUserStore`)

**管理用户信息和认证状态**

**状态属性：**

```javascript
{
  userInfo: null,                   // 用户信息对象
  token: '',                        // 认证令牌
  permissions: [],                  // 用户权限列表
  roles: []                         // 用户角色列表
}
```

**主要方法：**

```javascript
// 用户登录
login(credentials)

// 用户登出
logout()

// 设置用户信息
setUserInfo(userInfo)

// 更新用户权限
setPermissions(permissions)

// 检查权限
hasPermission(permission)

// 检查角色
hasRole(role)
```

**使用示例：**

```javascript
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()

// 用户登录
await userStore.login({
  username: 'admin',
  password: '123456'
})

// 检查权限
if (userStore.hasPermission('user:create')) {
  // 有创建用户权限
}

// 用户登出
userStore.logout()
```

### Tabs Store (`useTabsStore`)

**管理页面标签状态和导航历史**

**状态属性：**

```javascript
{
  visitedViews: [],                 // 已访问页面列表
  cachedViews: []                   // 缓存页面列表
}
```

**主要方法：**

```javascript
// 添加页面标签
addView(view)

// 移除页面标签
removeView(view)

// 移除其他标签
removeOtherViews(activeView)

// 移除左侧标签
removeLeftViews(activeView)

// 移除右侧标签
removeRightViews(activeView)

// 清空所有标签
clearAllViews()

// 初始化首页标签
initHomeTab()
```

**使用示例：**

```javascript
import { useTabsStore } from '@/store/modules/tabs'
import { useRoute } from 'vue-router'

const tabsStore = useTabsStore()
const route = useRoute()

// 添加当前页面到标签
tabsStore.addView(route)

// 关闭当前标签
tabsStore.removeView(route)

// 关闭其他标签
tabsStore.removeOtherViews(route)
```

**持久化配置：**
所有 Store 都配置了持久化存储，页面刷新后状态会自动恢复：

```javascript
// 持久化配置示例
persist: {
  key: 'app-store',
  storage: localStorage,
  paths: ['title', 'theme', 'sidebarTheme', 'isLocked', 'lockPassword']
}
```

## 功能实现详解

### 1. 主题系统

**实现原理**:

- 使用 TDesign 的主题系统
- 通过 CSS 变量实现主题切换
- 支持全局主题和侧边栏主题独立控制

**主题切换流程**:

1. 用户点击主题切换按钮
2. 调用 `appStore.toggleTheme()`
3. 更新 `document.documentElement.setAttribute('theme-mode', theme)`
4. CSS 变量自动更新，实现主题切换

**CSS 变量示例**:

```css
:root {
  --td-bg-color-container: #ffffff;
  --td-text-color-primary: #000000;
}

[theme-mode="dark"] {
  --td-bg-color-container: #1a1a1a;
  --td-text-color-primary: #ffffff;
}
```

### 2. 锁屏功能

**实现流程**:

1. 用户点击锁定屏幕
2. 显示 `LockScreenDialog` 设置密码
3. 密码保存到 `appStore.lockPassword`
4. 设置 `appStore.isLocked = true`
5. `MainLayout` 检测锁屏状态，显示 `FullScreenLock`
6. 用户输入正确密码解锁

**安全考虑**:

- 密码存储在内存中，页面刷新后清除
- 支持键盘快捷键 (Alt+L)
- 解锁后自动清除密码

### 3. 页面标签系统

**实现原理**:

- 监听路由变化自动添加标签
- 使用 `TabsStore` 管理标签状态
- 首页标签永远存在且不可关闭
- 支持标签关闭和页面导航

**标签生命周期**:

1. 用户访问新页面
2. 路由守卫触发，检查是否已存在标签
3. 不存在则添加新标签到 `visitedPages`
4. 更新激活状态和滚动位置
5. 用户关闭标签时从列表中移除

### 4. 搜索功能

**实现原理**:

- 预处理路由配置，提取所有可搜索的菜单项
- 使用模糊匹配算法搜索标题
- 支持键盘快捷键和实时搜索

**搜索流程**:

1. 用户按 Ctrl+K 或点击搜索框
2. 打开 `SearchDialog` 组件
3. 输入关键词触发实时搜索
4. 调用 `appStore.searchMenuItems(keyword)`
5. 显示匹配结果，点击直接导航

### 5. 响应式布局

**断点设计**:

- 桌面端: > 768px
- 平板端: 768px - 480px
- 移动端: < 480px

**响应式策略**:

- 侧边栏在移动端自动折叠
- 搜索框在小屏幕下调整宽度
- 页面标签支持水平滚动
- 时钟组件字体大小自适应

### 6. 动画系统

**页面切换动画**:

```css
.page-transition-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-transition-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}
```

**组件动画**:

- 下拉菜单: 淡入淡出 + 位移
- 按钮悬停: 缩放 + 颜色变化
- 标签切换: 平滑滚动

### 7. ECharts 图表系统详解

####  **ECharts 集成配置**

**位置**: `src/echarts/index.js`

**功能**: ECharts 库的统一导入和配置管理。

```javascript
import * as echarts from 'echarts'

// 导出 echarts 实例
export { echarts }
export default echarts
```

**依赖版本**: `echarts: ^6.0.0`



#### 图表组件使用指南

1. **引入 ECharts**:

```javascript
import { echarts } from '@/echarts'
```

2. **创建图表容器引用**:

```javascript
const chartRef = ref(null)
let chartInstance = null
```

3. **初始化图表**:

```javascript
const initChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value)
    chartInstance.setOption(getChartOption())
  }
}
```

4. **响应式处理**:

```javascript
const handleResize = () => {
  chartInstance?.resize()
}

// 监听窗口大小变化
window.addEventListener('resize', handleResize)

// 监听侧边栏折叠状态变化
watch(
  () => appStore.isSidebarCollapsed,
  () => {
    setTimeout(() => {
      handleResize()
    }, 300) // 等待CSS动画完成
  }
)
```

5. **生命周期管理**:

```javascript
onMounted(async () => {
  await nextTick()
  initChart()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  chartInstance?.dispose()
})
```

## 权限管理架构

本项目实现了一套完整的基于角色的访问控制（RBAC）权限管理系统，包含用户管理、角色管理、菜单权限管理等核心功能。系统采用前后端分离架构，前端基于 Vue 3 + TDesign 构建，提供直观的权限管理界面。

### 核心概念

- **用户（User）**：系统的使用者，可以分配多个角色
- **角色（Role）**：权限的集合，用户通过角色获得权限
- **菜单（Menu）**：系统功能的载体，包含目录、菜单、按钮三种类型
- **权限（Permission）**：对系统资源的访问控制

### 权限模型

```
用户 (User) ←→ 角色 (Role) ←→ 菜单权限 (Menu Permission)
     ↓              ↓                    ↓
  用户信息        角色信息            菜单/按钮权限
```



## 功能模块详解

### 1. 用户管理模块

**文件位置**: `src/views/permission/user/Index.vue`

#### 核心功能

- **用户列表管理**：支持分页查询、条件搜索、批量操作
- **用户信息维护**：新增、编辑、删除用户信息
- **用户状态控制**：启用/禁用用户账户
- **角色分配**：为用户分配和管理角色
- **密码管理**：重置用户密码
- **全屏适配**：支持全屏模式下的表格高度自适应

#### 主要特性

1. **搜索功能**
   - 用户名模糊搜索
   - 手机号精确搜索
   - 状态筛选（启用/禁用）

2. **表格操作**
   - 多选批量删除
   - 行内编辑、删除
   - 下拉菜单更多操作

3. **用户表单**
   - 双列网格布局
   - 表单验证（用户名、邮箱、密码等）
   - 编辑时用户名禁用

4. **角色分配界面**
   - 已分配角色展示
   - 可分配角色选择
   - 拖拽式角色管理

#### API 接口

```javascript
// 用户管理相关接口
import {
  getUserListPage,     // 分页查询用户列表
  createUser,         // 创建用户
  updateUser,         // 更新用户信息
  deleteUser,         // 删除用户
  batchDeleteUser,    // 批量删除用户
  updateUserStatus,   // 更新用户状态
  resetUserPassword,  // 重置用户密码
  getUserRoles,       // 获取用户角色
  saveUserRoles       // 保存用户角色分配
} from '@/api/user'
```

### 2. 角色管理模块

**文件位置**: `src/views/permission/role/Index.vue`

#### 核心功能

- **角色列表管理**：角色的增删改查操作
- **角色状态控制**：启用/禁用角色
- **权限分配**：为角色分配菜单权限
- **权限可视化**：树形结构展示权限分配
- **全屏适配**：支持全屏模式下的表格高度自适应

#### 权限分配功能

**组件位置**: `src/components/permission-assign/PermissionAssignDialog.vue`

1. **权限树展示**
   - 树形结构显示所有权限
   - 支持展开/收起操作
   - 虚拟滚动优化性能

2. **权限操作**
   - 全选/取消全选
   - 父子节点联动选择
   - 半屏模式支持

3. **交互优化**
   - 实时权限状态更新
   - 权限分配结果预览
   - 操作确认机制

#### API 接口

```javascript
// 角色管理相关接口
import {
  getRoleListPage,    // 分页查询角色列表
  createRole,         // 创建角色
  updateRole,         // 更新角色信息
  deleteRole,         // 删除角色
  updateRoleStatus,   // 更新角色状态
  saveRolePermission  // 保存角色权限分配
} from '@/api/role'
```

### 3. 菜单管理模块

**文件位置**: `src/views/permission/menu/Index.vue`

#### 核心功能

- **菜单树管理**：树形结构的菜单管理
- **菜单类型支持**：目录、菜单、按钮三种类型
- **层级关系控制**：严格的菜单层级约束
- **权限标识管理**：按钮级权限控制
- **全屏适配**：支持全屏模式下的表格高度自适应

#### 菜单类型说明

1. **目录（Directory）**
   - 用于组织菜单结构
   - 不对应具体页面
   - 可包含子目录和菜单

2. **菜单（Menu）**
   - 对应具体的页面组件
   - 需要配置组件路径
   - 可包含按钮权限

3. **按钮（Button）**
   - 页面内的操作权限
   - 配置权限标识
   - 不能包含子节点

#### 层级约束规则

- **表格头部新增**：只能创建顶级目录（parent = 0）
- **操作列新增**：
  - 目录下可创建：目录、菜单
  - 菜单下可创建：按钮
  - 按钮下不可创建子节点
- **编辑限制**：
  - 上级菜单不可修改
  - 菜单类型不可修改

#### 表单字段控制

```javascript
// 根据菜单类型动态显示字段
- 英文名称：按钮类型时隐藏
- 组件路径：仅菜单类型显示
- 权限标识：仅按钮类型显示
```

#### API 接口

```javascript
// 菜单管理相关接口
import {
  queryMenuList,        // 查询菜单列表
  queryMenuListByLike,  // 模糊查询菜单
  addMenu,             // 新增菜单
  updateMenu,          // 更新菜单
  deleteMenu,          // 删除菜单
  echoMenu             // 菜单数据回显
} from '@/api/menu'
```

## 权限控制机制

### 1. 路由权限控制

**文件位置**: `src/permission.js`

#### 路由守卫流程

```javascript
// 路由前置守卫逻辑
1. 检查用户Token
2. 获取用户信息和权限
3. 动态生成用户路由
4. 添加路由到路由器
5. 权限验证通过后放行
```

#### 路由分类

**常量路由** (`constantRoutes`):

- 登录页面
- 首页
- 404页面
- 不需要权限验证

**动态路由** (`asyncRoutes`):

- 权限管理模块
- 系统管理模块
- 需要权限验证

**任意路由** (`anyRoutes`):

- 404重定向
- 处理未匹配路由

## 🚀 部署指南

### 🔧 部署步骤

**1. 环境准备**

```bash
# 确保 Node.js 版本 >= 16
node --version
npm --version

# 安装依赖
npm install
```

**2. 构建生产版本**

```bash
# 构建生产环境
npm run build

# 预览构建结果（可选）
npm run preview
```

**3. 部署到服务器**

**方式一：手动部署**

```bash
# 压缩构建文件
tar -czf dist.tar.gz dist/

# 上传到服务器
scp dist.tar.gz user@server:/var/www/

# 在服务器上解压
ssh user@server
cd /var/www/
tar -xzf dist.tar.gz
mv dist html
```

**方式二：使用 CI/CD**

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to server
      uses: appleboy/scp-action@v0.1.4
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        source: "dist/*"
        target: "/var/www/html/"
```

### 🌐 Web 服务器配置

**Nginx 配置示例：**

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name your-domain.com;
    
    # HTTPS 重定向（推荐）
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name your-domain.com;
    
    # SSL 证书配置
    ssl_certificate /path/to/your/cert.pem;
    ssl_certificate_key /path/to/your/private.key;
    
    # 网站根目录
    root /var/www/html/dist;
    index index.html;
    
    # 安全头设置
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # 启用压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json
        image/svg+xml;
    
    # Vue Router History 模式支持
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存策略
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # API 代理（如果需要）
    location /api/ {
        proxy_pass http://backend-server:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # 禁止访问敏感文件
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

**Apache 配置示例：**

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/html/dist
    
    # 启用重写模块
    RewriteEngine On
    
    # Vue Router History 模式支持
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
    
    # 启用压缩
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/plain
        AddOutputFilterByType DEFLATE text/html
        AddOutputFilterByType DEFLATE text/xml
        AddOutputFilterByType DEFLATE text/css
        AddOutputFilterByType DEFLATE application/xml
        AddOutputFilterByType DEFLATE application/xhtml+xml
        AddOutputFilterByType DEFLATE application/rss+xml
        AddOutputFilterByType DEFLATE application/javascript
        AddOutputFilterByType DEFLATE application/x-javascript
    </IfModule>
    
    # 静态资源缓存
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType text/css "access plus 1 year"
        ExpiresByType application/javascript "access plus 1 year"
        ExpiresByType image/png "access plus 1 year"
        ExpiresByType image/jpg "access plus 1 year"
        ExpiresByType image/jpeg "access plus 1 year"
        ExpiresByType image/gif "access plus 1 year"
        ExpiresByType image/svg+xml "access plus 1 year"
    </IfModule>
</VirtualHost>
```

### 🐳 Docker 部署

**Dockerfile：**

```dockerfile
# 构建阶段
FROM node:18-alpine as build-stage

WORKDIR /app

# 复制 package 文件
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 生产阶段
FROM nginx:alpine as production-stage

# 复制构建结果
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 复制 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
```

**docker-compose.yml：**

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
    
  # 如果有后端服务
  api:
    image: your-api-image
    ports:
      - "8080:8080"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```
