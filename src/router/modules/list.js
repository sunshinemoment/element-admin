import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'

const route = {
  path: 'list',
  name: ConstantRouter.LIST,
  meta: {
    name: '列表页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: ConstantRouter.LIST_TABLE,
  children: [
    {
      path: 'table-list',
      name: ConstantRouter.LIST_TABLE,
      component: () =>
        import(/* webpackChunkName: "table-list" */ '@/views/list/table-list'),
      meta: {
        name: '查询列表'
      }
    }
  ]
}

export default route
