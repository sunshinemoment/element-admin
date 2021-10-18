import Home from '@/views/home'
import Demo from '@/views/demo/index.vue'
import proRoute from './modules/pro'
import chartsRoute from './modules/charts'

const route = {
  path: '/',
  name: 'home',
  component: Home,
  redirect: '/demo',
  children: [
    proRoute,
    chartsRoute,
    {
      path: 'demo',
      name: 'demo',
      component: Demo,
      meta: {
        icon: 'el-icon-pear',
        name: 'demo'
      }
    }
  ]
}

export default route
