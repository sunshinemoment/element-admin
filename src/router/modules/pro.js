const route = {
  path: 'pro',
  name: 'pro',
  meta: {
    name: 'pro页'
  },
  redirect: '/pro/pro-form',
  children: [
    {
      path: 'pro-form',
      name: 'pro-form',
      component: () =>
        import(/* webpackChunkName: "user" */ '@/views/pro/pro-form'),
      meta: {
        name: 'pro-form'
      }
    },
    {
      path: 'pro-table',
      name: 'pro-table',
      component: () =>
        import(/* webpackChunkName: "user" */ '@/views/pro/pro-form'),
      meta: {
        name: 'pro-table'
      }
    },
    {
      path: 'list-page',
      name: 'list-page',
      component: () =>
        import(/* webpackChunkName: "user" */ '@/views/pro/list-page'),
      meta: {
        name: 'list-page'
      }
    }
  ]
}

export default route
