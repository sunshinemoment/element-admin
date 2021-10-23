import Home from '@/views/home'
import Demo from '@/views/demo/index.vue'
import modules from './modules'

const route = {
  path: '/',
  name: 'home',
  component: Home,
  redirect: '/demo',
  children: [
    ...modules,
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
