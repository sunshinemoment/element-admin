import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'
import * as ConstantLabel from '@/constant/label'

const route = {
  path: 'list',
  name: ConstantRouter.LIST,
  meta: {
    name: ConstantLabel.LIST,
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: { name: ConstantRouter.LIST_TABLE },
  children: [
    {
      path: 'table-list',
      name: ConstantRouter.LIST_TABLE,
      component: () =>
        import(/* webpackChunkName: "table-list" */ '@/views/list/table-list'),
      meta: {
        name: ConstantLabel.LIST_TABLE
      }
    }
  ]
}

export default route
