export {}

import type { STYLE_VARIBLES } from './varibles'

declare module 'vue' {
  interface ComponentCustomProperties {
    $STYLE_VARIBLES: typeof STYLE_VARIBLES
  }
}
