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
      if (children?.length) {
        return (
          <el-submenu>
            <tree-menu menu-list={children}></tree-menu>
          </el-submenu>
        )
      }
      return <el-menu-item class="menu-item">{meta?.name}</el-menu-item>
    })
  }
}
</script>
