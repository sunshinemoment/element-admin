import Home from '@/views/home'
import Demo from '@/views/demo/index.vue'
import proRoute from './modules/pro'

const route = {
  path: '/',
  name: 'home',
  component: Home,
  redirect: '/demo',
  children: [
    proRoute,
    {
      path: 'demo',
      name: 'demo',
      component: Demo,
      meta: {
        name: 'demo'
      }
    }
  ]
}

export default route