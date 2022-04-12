import Demo from '@/views/demo/index.vue'
import * as ConstantRouter from '@/constant/router'

const route = {
  path: 'demo',
  name: ConstantRouter.DEMO,
  component: Demo,
  meta: {
    icon: 'el-icon-pear',
    name: 'demo'
  }
}

export default route
