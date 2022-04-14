import Demo from '@/views/demo/index.vue'
import * as ConstantRouter from '@/constant/router'
import * as ConstantLabel from '@/constant/label'

const route = {
  path: 'demo',
  name: ConstantRouter.DEMO,
  component: Demo,
  meta: {
    icon: 'el-icon-pear',
    name: ConstantLabel.DEMO,
  }
}

export default route
