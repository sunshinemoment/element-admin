import RouterHolder from '@/components/router-holder'

const route = {
  path: 'charts',
  name: 'charts',
  meta: {
    name: '图表页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: '/charts/echarts',
  children: [
    {
      path: 'echarts',
      name: 'charts-echarts',
      component: () =>
        import(/* webpackChunkName: "echarts" */ '@/views/charts/echarts'),
      meta: {
        name: 'echarts'
      }
    }
  ]
}

export default route
