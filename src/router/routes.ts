import { RouteConfig } from 'vue-router'
import Home from '@/views/home/index.vue'
import User from '@/views/user/index.vue'
import modules from './modules'
import { formatRoutesByEnhanceMeta } from './helper'

/**
 * meta: { name: '路由名称', isExternal: ‘true/ false 是否外部链接’, isNewTab: 'true/false 是否打开新标签', link: '外部链接', path: '新打开标签页路由' }
 *
 */
const routes: Array<RouteConfig> = formatRoutesByEnhanceMeta([
  {
    path: '/',
    name: 'home',
    component: Home,
    children: modules
  },
  {
    path: '/form-generate',
    name: '/form-generate',
    component: () =>
      import(
        /* webpackChunkName: "form-generate" */ '@/views/user/login/index.vue'
      )
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    redirect: '/user/login',
    children: [
      {
        path: 'login',
        name: 'user-login',
        component: () =>
          import(/* webpackChunkName: "user" */ '@/views/user/login/index.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () =>
          import(
            /* webpackChunkName: "user" */ '@/views/user/register/index.vue'
          )
      }
    ]
  }
])

export default routes
