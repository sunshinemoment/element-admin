<script>
export default {
  name: 'tree-menu',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    active: String,
    menuClick: Function
  },
  functional: true,
  render(_, { props }) {
    const { data, menuClick } = props
    return data.map((item) => {
      const { key, name, icon, hideChildrenInMenu, children } = item
      if (!hideChildrenInMenu && children?.length) {
        return (
          <el-submenu key={key} index={key}>
            <template slot="title">
              {icon ? <i class={icon}></i> : ''}
              <span slot="title">{name}</span>
            </template>
            <tree-menu data={children} menu-click={menuClick}></tree-menu>
          </el-submenu>
        )
      }

      return (
        <el-menu-item
          class="menu-item"
          key={key}
          index={key}
          onClick={() => menuClick(item)}
        >
          {icon ? <i class={icon}></i> : ''}
          <span slot="title">{name}</span>
        </el-menu-item>
      )
    })
  }
}
</script>
