import RouterHolder from '@/components/router-holder'
import * as ConstantRouter from '@/constant/router'
import * as ConstantLabel from '@/constant/label'

const route = {
  path: 'media',
  name: ConstantRouter.MEDIA,
  meta: {
    name: ConstantLabel.MEDIA,
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
        name: ConstantLabel.MEDIA_DEVICE,
      }
    }
  ]
}

export default route
