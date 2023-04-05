import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createPinia } from 'pinia'


//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
  defaultTheme: 'myCustomLightTheme',

  theme: {
    myCustomLightTheme
  }
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(pinia)
app.mount('#app')

