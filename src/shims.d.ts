import { STYLE_VARIBLES } from '@/plugins/varibles/style/varibles'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $STYLE_VARIBLES: typeof STYLE_VARIBLES
  }
}
