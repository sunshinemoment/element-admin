<script>
import { normalizeReturnRender } from '@/pro/helper'
import PresetElement from './preset-element'

export default {
  props: {
    field: {
      type: Object,
      default: () => ({})
    },
    model: {
      type: Object,
      default: () => ({})
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    try {
      const {
        render,
        formItemProps: { prop },
        readonly: fieldReadonly
      } = this.field

      if (render) {
        let content
        if (prop) {
          content = render.call(this, h, prop, this.field, this.model)
        } else {
          content = render.call(this, h, this.field, this.model)
        }

        return normalizeReturnRender(h, content)
      }

      if ((this.readonly && fieldReadonly === undefined) || fieldReadonly) {
        return this.model[prop]
      }

      return (
        <PresetElement
          fieldData={this.field}
          modelData={this.model}
        ></PresetElement>
      )
    } catch (e) {
      console.log(e, 'error dynamic-element in of pro-form')
      return (
        <span>
          请联系开发管理人员 {e?.message ? `error: ${e.message}` : ''}
        </span>
      )
    }
  }
}
</script>
