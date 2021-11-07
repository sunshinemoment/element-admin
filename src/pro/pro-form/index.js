import ProForm from './src/main'
export { default as BaseLayout } from './src/coms/base-layout'
export { default as GridLayout } from './src/coms/grid-layout'
export { default as GroupsLayout } from './src/coms/groups-layout'
export { default as DynamicElement } from './src/coms/dynamic-element'
export * as helper from './src/helper'

ProForm.install = function (Vue) {
  Vue.component(ProForm.name, ProForm)
}

export default ProForm
