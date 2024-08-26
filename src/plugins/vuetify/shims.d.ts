import { AliasesUI } from './aliases/aliases.enum'
import * as Components from 'vuetify/components'

interface _CustomComponents {
  [AliasesUI.DesktopMenuList]: typeof Components.VList
  [AliasesUI.DesktopMenuListItem]: typeof Components.VListItem
}

declare module 'vue' {
  export interface GlobalComponents extends _CustomComponents {}
}

declare module '@vue/runtime-dom' {
  export interface GlobalComponents extends _CustomComponents {}
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents extends _CustomComponents {}
}
