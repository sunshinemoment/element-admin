<script>
import { normalizeReturnRender } from '@/pro/helper'
export default {
  name: 'custom-column-content',
  props: {
    render: Function,
    column: {
      type: Object,
      default: () => ({})
    },
    columnIndex: Number,
    scope: {
      type: Object,
      default: () => ({})
    }
  },
  render(h) {
    const { prop } = this.column
    const { row, $index: rowIndex } = this.scope
    let callParams = [h, row, rowIndex, this.columnIndex, this.scope]
    if (prop !== undefined) {
      callParams = [h, row[prop], row, rowIndex, this.columnIndex, this.scope]
    }
    /**
     * h 必须传递 不然会引起h is not defined
     * row[prop] 当前colum值
     * row 当前记录数据
     * rowIndex 当前row索引
     * this.columnIndex 当前colum索引
     * this.scope 当前记录集合
     */
    const content = this.render.call(this, ...callParams)
    return normalizeReturnRender(h, content)
  }
}
</script>
