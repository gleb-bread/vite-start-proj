import { AliasesUI } from '../aliases/aliases.enum'

export const Default: {
  [key: string]: undefined | Record<string, unknown>
  global?: Record<string, unknown>
} = {
  [AliasesUI.DesktopMenuList]: {
    class: ['desktop-menu-list']
  },
  [AliasesUI.DesktopMenuListItem]: {
    class: ['desktop-menu-list-item'],
    link: true
  }
}
