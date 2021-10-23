import RouterHolder from '@/components/router-holder'

const route = {
  path: 'directives',
  name: 'directives',
  meta: {
    name: 'Vue指令页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: '/directives/copy',
  children: [
    {
      path: 'copy',
      name: 'directive-copy',
      component: () =>
        import(/* webpackChunkName: "directives" */ '@/views/directives/copy'),
      meta: {
        name: '复制功能'
      }
    }
  ]
}

export default route
