import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'
import * as ConstantLabel from '@/constant/label'

const route = {
  path: 'charts',
  name: ConstantRouter.CHARTS,
  meta: {
    name: ConstantLabel.CHARTS,
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
        name: ConstantLabel.CHARTS_ECHARTS,
      }
    }
  ]
}

export default route
