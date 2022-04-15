import User from '@/views/user/index.vue'
import * as ConstantRouter from '@/constant/router'

const route = {
  path: '/user',
  name: ConstantRouter.USER,
  component: User,
  redirect: { name: ConstantRouter.USER_LOGIN },
  children: [
    {
      path: 'login',
      name: ConstantRouter.USER_LOGIN,
      component: () =>
        import(
          /* webpackChunkName: "user-login" */ '@/views/user/login/index.vue'
        )
    },
    {
      path: 'register',
      name: ConstantRouter.USER_REGISTER,
      component: () =>
        import(
          /* webpackChunkName: "user-register" */ '@/views/user/register/index.vue'
        )
    }
  ]
}

export default route
