import * as ConstantRouter from '@/constant/router'

const route = {
  path: '/form-generate',
  name: ConstantRouter.FORM_GENERATE,
  component: () =>
    import(
      /* webpackChunkName: "form-generate" */ '@/views/pro/form-generate/index.vue'
    )
}

export default route
