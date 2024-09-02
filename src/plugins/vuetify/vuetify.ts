import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/assets/styles/main.scss'
import { createVuetify } from 'vuetify'
import { Themes } from './themes'
import { THEMES } from './themes.enum'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { Aliases } from './aliases'
import { Default } from './defaults'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },

  theme: {
    defaultTheme: THEMES.DEFAULT,
    themes: Themes
  },

  aliases: Aliases,

  defaults: Default
})
