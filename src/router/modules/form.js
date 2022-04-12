import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'

const route = {
  path: 'form',
  name: ConstantRouter.FORM,
  meta: {
    name: '表单页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: ConstantRouter.FORM_BASE,
  children: [
    {
      path: 'base-form',
      name: ConstantRouter.FORM_BASE,
      component: () =>
        import(/* webpackChunkName: "base-form" */ '@/views/form/base-form'),
      meta: {
        name: '基础表单'
      }
    },
    {
      path: 'step-form',
      name: ConstantRouter.FORM_STEP,
      component: () =>
        import(/* webpackChunkName: "step-form" */ '@/views/form/step-form'),
      meta: {
        name: '分布表单'
      }
    },
    {
      path: 'advanced-form',
      name: ConstantRouter.FORM_ADVANCED,
      component: () =>
        import(
          /* webpackChunkName: "advanced-form" */ '@/views/form/advanced-form'
        ),
      meta: {
        name: '高级表单'
      }
    }
  ]
}

export default route
