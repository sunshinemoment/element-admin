import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'
import * as ConstantLabel from '@/constant/label'

const route = {
  path: 'directives',
  name: ConstantRouter.DIRECTIVES,
  meta: {
    name: ConstantLabel.DIRECTIVES,
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
        name: ConstantLabel.DIRECTIVES_COPY,
      }
    }
  ]
}

export default route
