import * as ConstantRouter from '@/constant/router'
import * as ConstantLabel from '@/constant/label'
import { treeToMap } from '@/utils/tools'

/**
 * 菜单列表
 * hide 隐藏当前菜单
 * hideChildrenInMenu 隐藏所有子菜单
 * key 路由唯一值
 * name 路由名称
 */
const menu = [
  {
    key: ConstantRouter.FORM,
    name: ConstantLabel.FORM,
    icon: 'el-icon-folder-opened',
    children: [
      {
        key: ConstantRouter.FORM_BASE,
        name: ConstantLabel.FORM_BASE
      },
      {
        key: ConstantRouter.FORM_STEP,
        name: ConstantLabel.FORM_STEP
      },
      {
        key: ConstantRouter.FORM_ADVANCED,
        name: ConstantLabel.FORM_ADVANCED
      }
    ]
  },
  {
    key: ConstantRouter.LIST,
    name: ConstantLabel.LIST,
    icon: 'el-icon-folder-opened',
    children: [
      {
        key: ConstantRouter.LIST_TABLE,
        name: ConstantLabel.LIST_TABLE
      }
    ]
  },
  {
    key: ConstantRouter.PRO,
    name: ConstantLabel.PRO,
    icon: 'el-icon-folder-opened',
    children: [
      {
        key: ConstantRouter.PRO_FORM,
        name: ConstantLabel.PRO_FORM
      },
      {
        key: ConstantRouter.PRO_TABLE,
        name: ConstantLabel.PRO_TABLE
      },
      {
        key: ConstantRouter.LIST_PAGE,
        name: ConstantLabel.LIST_PAGE
      }
    ]
  }
]

export const menuMap = treeToMap(menu)

export default menu
