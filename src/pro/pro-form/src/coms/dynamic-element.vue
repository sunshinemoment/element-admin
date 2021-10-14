<script>
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

        if (content === null || content === undefined) {
          return ''
        }

        // 返回的元素自带标签 那么直接返回
        if (content.constructor.name === 'VNode') {
          if (content.tag === 'template') {
            // 处理元素为空标签的情况下, 默认修改为span
            content.tag = 'div'
          }
          return content
        }

        // 返回的元素没有标签, 外面包裹一层标签
        return <span>{content}</span>
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
