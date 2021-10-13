import RouterHolder from '@/components/router-holder'

const route = {
  path: 'pro',
  name: 'pro',
  meta: {
    name: 'pro页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: '/pro/pro-form',
  children: [
    {
      path: 'pro-form',
      name: 'pro-form',
      component: () =>
        import(/* webpackChunkName: "pro" */ '@/views/pro/pro-form'),
      meta: {
        name: 'pro-form'
      }
    },
    {
      path: 'pro-table',
      name: 'pro-table',
      component: () =>
        import(/* webpackChunkName: "pro" */ '@/views/pro/pro-table'),
      meta: {
        name: 'pro-table'
      }
    },
    {
      path: 'list-page',
      name: 'list-page',
      component: () =>
        import(/* webpackChunkName: "pro" */ '@/views/pro/list-page'),
      meta: {
        name: 'list-page'
      }
    }
  ]
}

export default route
