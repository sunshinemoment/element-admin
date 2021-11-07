import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { mode } from './config'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode,
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  // 打开外部链接
  if (to.meta?.isExternal) {
    window.open(to.meta.link)
    return
  }
  // 新标签打开路由
  if (to.meta?.isNewTab) {
    window.open(
      mode === 'hash'
        ? location.origin + location.pathname + '#' + to.meta.path
        : to.meta.path
    )
    return
  }
  store.commit('currentRouteUpdate', to)
  next()
})

export default router
