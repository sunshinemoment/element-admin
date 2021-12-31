import RouterHolder from '@/components/router-holder'

const route = {
  path: 'form',
  name: 'form',
  meta: {
    name: '表单页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: '/form/base-form',
  children: [
    {
      path: 'base-form',
      name: 'base-form',
      component: () =>
        import(/* webpackChunkName: "base-form" */ '@/views/form/base-form'),
      meta: {
        name: '基础表单'
      }
    },
    {
      path: 'step-form',
      name: 'step-form',
      component: () =>
        import(/* webpackChunkName: "step-form" */ '@/views/form/step-form'),
      meta: {
        name: '分布表单'
      }
    },
    {
      path: 'advanced-form',
      name: 'advanced-form',
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
