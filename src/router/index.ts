import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, _, next) => {
  store.commit('currentRouteUpdate', to)
  next()
})

export default router
