import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import createVuetify from '@/plugins/vuetify/vuetify'
import GloabalStyles from '@/plugins/varibles/style'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVuetify)
app.use(GloabalStyles)

app.mount('#app')
