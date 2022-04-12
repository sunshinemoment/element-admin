import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'

const route = {
  path: 'pro',
  name: ConstantRouter.PRO,
  meta: {
    name: 'pro页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: ConstantRouter.PRO_FORM,
  children: [
    {
      path: 'pro-form',
      name: ConstantRouter.PRO_FORM,
      component: () =>
        import(/* webpackChunkName: "pro" */ '@/views/pro/pro-form'),
      meta: {
        name: '表单页'
      }
    },
    {
      path: 'pro-table',
      name: ConstantRouter.PRO_TABLE,
      component: () =>
        import(/* webpackChunkName: "pro" */ '@/views/pro/pro-table'),
      meta: {
        name: '表格页'
      }
    },
    {
      path: 'list-page',
      name: ConstantRouter.LIST_PAGE,
      component: () =>
        import(/* webpackChunkName: "pro" */ '@/views/pro/list-page'),
      meta: {
        name: '搜索页面'
      }
    },
    {
      path: 'form-generate',
      meta: {
        name: '表单生成器',
        path: '/form-generate',
        isNewTab: true
      }
    }
  ]
}

export default route
