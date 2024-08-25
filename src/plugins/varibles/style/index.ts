import { STYLE_VARIBLES } from './varibles'
import { type App } from 'vue'

export default {
  install(app: App): void {
    app.config.globalProperties.$STYLE_VARIBLES = STYLE_VARIBLES
  }
}
