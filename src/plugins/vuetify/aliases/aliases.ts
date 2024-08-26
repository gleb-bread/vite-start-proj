import { AliasesUI } from './aliases.enum'
import * as Components from 'vuetify/components'

export const Aliases: Record<string, any> = {
  [AliasesUI.DesktopMenuList]: Components.VList,
  [AliasesUI.DesktopMenuListItem]: Components.VListItem
}
