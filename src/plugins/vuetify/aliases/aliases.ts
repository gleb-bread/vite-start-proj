import { AliasesUI } from './aliases.enum'
import * as Components from 'vuetify/components'

export interface IAliases {
  [AliasesUI.DesktopMenuList]: typeof Components.VList
  [AliasesUI.DesktopMenuListItem]: typeof Components.VListItem
}

export const Aliases: IAliases = {
  [AliasesUI.DesktopMenuList]: Components.VList,
  [AliasesUI.DesktopMenuListItem]: Components.VListItem
}
