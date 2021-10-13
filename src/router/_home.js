import Home from '@/views/home'
import Demo from '@/views/demo/index.vue'

const route = {
  path: '/',
  name: 'home',
  component: Home,
  redirect: '/demo',
  children: [
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
