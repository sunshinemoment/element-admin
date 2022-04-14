import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'
import * as ConstantLabel from '@/constant/label'

const route = {
  path: 'form',
  name: ConstantRouter.FORM,
  meta: {
    name: ConstantLabel.FORM,
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
        name: ConstantLabel.FORM_BASE
      }
    },
    {
      path: 'step-form',
      name: ConstantRouter.FORM_STEP,
      component: () =>
        import(/* webpackChunkName: "step-form" */ '@/views/form/step-form'),
      meta: {
        name: ConstantLabel.FORM_STEP
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
        name: ConstantLabel.FORM_ADVANCED
      }
    }
  ]
}

export default route
