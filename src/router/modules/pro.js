import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'
import * as ConstantLabel from '@/constant/label'

const route = {
  path: 'pro',
  name: ConstantRouter.PRO,
  meta: {
    name: ConstantLabel.PRO,
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: { name: ConstantRouter.PRO_FORM },
  children: [
    {
      path: 'pro-form',
      name: ConstantRouter.PRO_FORM,
      component: () =>
        import(/* webpackChunkName: "pro" */ '@/views/pro/pro-form'),
      meta: {
        name: ConstantLabel.PRO_FORM
      }
    },
    {
      path: 'pro-table',
      name: ConstantRouter.PRO_TABLE,
      component: () =>
        import(/* webpackChunkName: "pro" */ '@/views/pro/pro-table'),
      meta: {
        name: ConstantLabel.PRO_TABLE
      }
    },
    {
      path: 'list-page',
      name: ConstantRouter.LIST_PAGE,
      component: () =>
        import(/* webpackChunkName: "pro" */ '@/views/pro/list-page'),
      meta: {
        name: ConstantLabel.LIST_PAGE
      }
    },
    {
      path: 'form-generate',
      meta: {
        name: ConstantLabel.FORM_GENERATE,
        path: '/form-generate',
        isNewTab: true
      }
    }
  ]
}

export default route
