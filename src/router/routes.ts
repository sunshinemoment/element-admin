import { RouteConfig } from 'vue-router'
import Home from '@/views/home/index.vue'
import modules from './modules'
import formGenerateRouter from './modules/form-generate'
import userRouter from './modules/user'
import { formatRoutesByEnhanceMeta } from './helper'

/**
 * meta: {
 *  name: '路由名称',
 *  isExternal: ‘true/ false 是否外部链接’,
 *  isNewTab: 'true/false 是否打开新标签',
 *  link: '外部链接', path: '新打开标签页路由'
 * }
 */
const routes: Array<RouteConfig> = formatRoutesByEnhanceMeta([
  {
    path: '/',
    name: 'home',
    component: Home,
    children: modules
  },
  formGenerateRouter,
  userRouter
])

export default routes
