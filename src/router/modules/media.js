import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'

const route = {
  path: 'media',
  name: ConstantRouter.MEDIA,
  meta: {
    name: '媒体页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: ConstantRouter.MEDIA_DEVICE,
  children: [
    {
      path: 'device',
      name: ConstantRouter.MEDIA_DEVICE,
      component: () =>
        import(/* webpackChunkName: "media-device" */ '@/views/media/device'),
      meta: {
        name: '本地设备'
      }
    }
  ]
}

export default route
