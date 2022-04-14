import Vue from 'vue'

import ElementUI from 'element-ui'
import ProForm from '@/pro/pro-form'
import ProTable from '@/pro/pro-table'
import ListPage from '@/pro/list-page'

import serve from '@/serve'
import copy from '@/directives/copy'

Vue.use(ElementUI)
Vue.use(ProForm)
Vue.use(ProTable)
Vue.use(ListPage)

Vue.prototype.$serve = serve
Vue.directive('copy', copy)
