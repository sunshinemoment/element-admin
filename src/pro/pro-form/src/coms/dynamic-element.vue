<script>
import { normalizeReturnRender } from '../helper'
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
    }
  },
  render(h) {
    try {
      const {
        render,
        formItemProps: { prop }
      } = this.field

      if (render) {
        let content
        if (prop) {
          content = render.call(this, h, prop, this.field, this.model)
        } else {
          content = render.call(this, h, this.field, this.model)
        }

        return normalizeReturnRender(content)
      }

      return (
        <PresetElement
          fieldData={this.field}
          modelData={this.model}
        ></PresetElement>
      )
    } catch (e) {
      console.log(e)
      return (
        <span>
          请联系开发管理人员 {e?.message ? `error: ${e.message}` : ''}
        </span>
      )
    }
  }
}
</script>
