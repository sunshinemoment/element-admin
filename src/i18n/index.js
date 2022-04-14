import Vue from 'vue'
import ElementLocale from 'element-ui/lib/locale' // element-ui 国际化
import VueI18n from 'vue-i18n'
import { localStore } from '@/utils/store'
import en from './en'
import cn from './cn'

Vue.use(VueI18n)

const messages = {
  en,
  cn
}

const i18n = new VueI18n({
  locale: localStore.get('lang') || 'cn', // 语言标识
  messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value)) // 重点：为了实现element插件的多语言切换

export default i18n
