<script>
export default {
  name: 'tree-menu',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    active: String
  },
  functional: true,
  render(_, { props }) {
    const { data } = props
    return data.map(({ meta, children }) => {
      const title = meta.name || meta.realPath

      if (!meta.hideChildrenInMenu && children?.length) {
        return (
          <el-submenu key={meta.realPath} index={meta.realPath}>
            <template slot="title">{title}</template>
            <tree-menu data={children}></tree-menu>
          </el-submenu>
        )
      }
      return (
        <el-menu-item
          class="menu-item"
          key={meta.realPath}
          index={meta.realPath}
        >
          {title}
        </el-menu-item>
      )
    })
  }
}
</script>
