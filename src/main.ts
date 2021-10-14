import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import ProForm from '@/pro/pro-form'
import ProTable from '@/pro/pro-table'
import ListPage from '@/pro/list-page'
import 'element-ui/lib/theme-chalk/index.css'
import './global.scss'

Vue.use(ElementUI)
Vue.use(ProForm)
Vue.use(ProTable)
Vue.use(ListPage)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
