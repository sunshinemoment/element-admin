import RouterHolder from '@/components/router-holder'

const route = {
  path: 'list',
  name: 'list',
  meta: {
    name: '列表页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: '/list/table-list',
  children: [
    {
      path: 'table-list',
      name: 'table-list',
      component: () =>
        import(/* webpackChunkName: "table-list" */ '@/views/list/table-list'),
      meta: {
        name: '查询列表'
      }
    }
  ]
}

export default route
