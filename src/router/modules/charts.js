import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'

const route = {
  path: 'charts',
  name: ConstantRouter.CHARTS,
  meta: {
    name: '图表页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: ConstantRouter.CHARTS_ECHARTS,
  children: [
    {
      path: 'echarts',
      name: ConstantRouter.CHARTS_ECHARTS,
      component: () =>
        import(
          /* webpackChunkName: "charts-echarts" */ '@/views/charts/echarts'
        ),
      meta: {
        name: 'echarts'
      }
    }
  ]
}

export default route
