import Vue from 'vue'
import serve from '@/serve'
import copy from '@/directives/copy'

Vue.prototype.$serve = serve
Vue.directive('copy', copy)
