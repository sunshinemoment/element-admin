import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'

const route = {
  path: 'directives',
  name: ConstantRouter.DIRECTIVES,
  meta: {
    name: 'Vue指令页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: ConstantRouter.DIRECTIVES_COPY,
  children: [
    {
      path: 'copy',
      name: ConstantRouter.DIRECTIVES_COPY,
      component: () =>
        import(
          /* webpackChunkName: "directives-copy" */ '@/views/directives/copy'
        ),
      meta: {
        name: '复制功能'
      }
    }
  ]
}

export default route
