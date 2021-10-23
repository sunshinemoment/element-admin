import RouterHolder from '@/components/router-holder'

const route = {
  path: 'media',
  name: 'media',
  meta: {
    name: '媒体页',
    icon: 'el-icon-folder-opened'
  },
  component: RouterHolder,
  redirect: '/media/device',
  children: [
    {
      path: 'device',
      name: 'media-device',
      component: () =>
        import(/* webpackChunkName: "media" */ '@/views/media/device'),
      meta: {
        name: '本地设备'
      }
    }
  ]
}

export default route
