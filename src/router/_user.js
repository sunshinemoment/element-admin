import User from '@/views/user'

const route = {
  path: '/user',
  name: 'user',
  component: User,
  redirect: '/user/login',
  children: [
    {
      path: 'login',
      name: 'user-login',
      component: () =>
        import(/* webpackChunkName: "user" */ '@/views/user/login')
    },
    {
      path: 'register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "user" */ '@/views/user/register')
    }
  ]
}

export default route
