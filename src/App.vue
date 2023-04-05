<template>
    <v-locale-provider rtl>
      <div lang="ar" dir="rtl" class="shabnam-font">
        <router-view></router-view>

        <!-- <mainPage/> -->
      </div>
    </v-locale-provider>
</template>

<script>
// import mainPage from './components/mainPage.vue'
import { useTheme } from 'vuetify'

export default {
  name: 'App',
  components: {
    // mainPage
  },

  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  }
}
</Script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

@font-face {
  font-family: fontShabnam;
  src: url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.eot');
  src: url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.eot?#iefix') format('fontShabnam-opentype'),
       url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.woff') format('woff'),
       url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.shabnam-font {
  font-family: fontShabnam;
}
</style>
