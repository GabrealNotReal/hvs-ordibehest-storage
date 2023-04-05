<template>
  <div>
    <!-- <v-container>
      <div class="container-header">
        {{ 'pipi' }}
      </div>
    </v-container> -->

    <v-app id="inspire">

      <v-app-bar flat>
        <v-container class="d-flex align-center">
          <v-menu>
            <template v-slot:activator="{ props }">
              <!-- <v-btn
                color="primary"
                v-bind="props"
              >
                Activator slot
              </v-btn> -->
              <v-avatar
                class="ml-3"
                v-bind="props"
                color="grey-darken-1"
                size="48px"
              >
              <img src="../avataratari.jpg" width="48" height="57">
              </v-avatar>
            </template>
            <v-list>
              <v-list-item
                @click="avatarFunction(index)"
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- <v-avatar
            class="ml-3"
            color="grey-darken-1"
            size="39"
          ></v-avatar> -->

          <!-- <p>
            <router-link to="/tables">انبارها</router-link>
          </p> -->
          <v-tabs
            v-model="tab"
            variant="text"
          >
          <v-divider
              class=""
            inset
            vertical
            ></v-divider>
            <button
              class="v-btn v-btn--icon v-theme--light v-btn--density-default v-btn--variant-text text-body-2 text-capitalize app-btn"
              path="theme"
              @click="toggleTheme() && toggleIcon()"
              size="small"
              color="secondary"
            >
            <span class="v-btn__overlay"></span>
            <span class="v-btn__underlay"></span>
            <span class="v-btn__content" data-no-activator="">
              <i icon="mdi-vuetify" class="mdi-weather-sunny mdi v-icon notranslate v-theme--light" aria-hidden="true" style="font-size: 24px; height: 24px; width: 24px;"></i>
              <svg-icon :style="color" type="mdi" :path="path"></svg-icon>
              <i class="mdi-weather-night mdi v-icon notranslate v-theme--dark" aria-hidden="true" style="font-size: 24px; height: 24px; width: 24px;"></i>
            </span>
          </button>
          <v-divider
            inset
            vertical
            ></v-divider>
            <v-tab @click="storeMainTableDetail" value="mainTable">انبار سوله اصلی</v-tab>
            <!-- <router-link class="v-tab" to="/mainTables">انبار سوله اصلی</router-link> -->
            <!-- <router-link class="v-tab" to="/secondTable">انبار محوطه سوله</router-link> -->
            <v-tab value="secondTable">انبار محوطه سوله</v-tab>
            <v-tab value="thirdTable">انبار محوطه پشتی</v-tab>
            <v-tab value="reports">گزارشات</v-tab>
            <v-tab @click="getPansupportList" value="comeProductIn">ورود محصول از خارج</v-tab>
          </v-tabs>

          <v-spacer>
          <h2 class=""> انبار اردیبهشت </h2>  
          </v-spacer>

        </v-container>
      </v-app-bar>
      
      
      <v-main class="bg-grey-lighten-3">
        <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"> -->
        <v-container class="container-max">
          <v-row >
            <!-- <v-col cols="2">
              <v-sheet rounded="lg">
                <v-list rounded="lg">
                  <v-list-item
                    v-for="n in 5"
                    :key="n"
                    link
                  >
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item>

                  <v-divider class="my-2"></v-divider>

                  <v-list-item
                    link
                    color="grey-lighten-4"
                  >
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col> -->

            <v-col cols="12">
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >

              
              <v-window v-model="tab">
                <v-window-item value="mainTable">
                  <mainTable :colorTheme="colorTheme"/>
                </v-window-item>
              
                <v-window-item value="secondTable">
                  <secondTable :colorTheme="colorTheme"/>
                </v-window-item>
              
                <v-window-item value="thirdTable">
                  <thirdTable />
                </v-window-item>
              
                <v-window-item value="reports">
                  <reports/>
                </v-window-item>

                <v-window-item value="comeProductIn">
                  <comeProductInStorage :colorTheme="colorTheme"/>
                </v-window-item>
              </v-window>

              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      <!-- </v-parallax> -->
      </v-main>
    </v-app>
  </div>
</template>

<script>
  import mainTable from './tabs/tables/mainTable.vue'
  import secondTable from './tabs/tables/secondTable.vue'
  import thirdTable from './tabs/tables/thirdTable.vue'
  import comeProductInStorage from './tabs/comeProductInStorage.vue'
  import reports from './tabs/reportTransactions.vue'
  import { useTheme } from 'vuetify'
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiWeatherSunny } from '@mdi/js';
  import { mdiWeatherNight } from '@mdi/js';
// import { reactive } from '@vue/reactivity'
// import { computed } from '@vue/runtime-core'
import {useOrdibeheshtStorageStore} from './store/ordibeheshtStorageStore'

  export default {
    components: {
      mainTable,
      secondTable,
      SvgIcon,
      comeProductInStorage,
      thirdTable,
      reports,
    },
    
    data() {

      return{
        tab: null,
        path: mdiWeatherSunny,
        color: 'color:gold',
        colorTheme: 'cyan darken-4',
        items: [
          { title: 'Click Me' },
          { title: 'خروج' },
        ],
      }

    },
    
    methods:{
      toggleIcon(){
        if(this.path == mdiWeatherSunny){
        this.path = mdiWeatherNight
        this.color = 'color:white'
        this.colorTheme = 'cyan darken-4'
      }
      else{
        this.path = mdiWeatherSunny
        this.color = 'color:gold'
        this.colorTheme = 'teal darken-4'
      }
      },

      goToMainTable() {
        this.$router.push({path:'/mainTable'})
      },

      goToSecondTable() {
        this.$router.push({path:'/secondTable'})
      },

      avatarFunction(index) {
        if(index == 1){
          this.$router.push({path:'/'})
        }
      },
    },

    setup () {
    const theme = useTheme()

    // const loading = reactive({
    //   formLoading: false
    // })

    const store = useOrdibeheshtStorageStore()
    // const Pansupports = computed(() => store.allPansupports);      

    // const path = reactive(mdiWeatherSunny)

    // function toggleIcon(){
    //   if(path == mdiWeatherSunny){
    //     path = mdiWeatherNight
    //   }
    //   else{
    //     path = mdiWeatherSunny
    //   }

    // }

    async function getPansupportList(){
      // loading.formLoading = true;
      await store.getPansupportList();
      // loading.formLoading = false;
    }

    async function storeMainTableDetail(){
      // loading.formLoading = true;
      await store.getStoreMainStorageCells();
      // loading.formLoading = false;
    }

    function getStoreCells(){
      console.log('pipi')
    }

    return {
      getStoreCells,
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
      getPansupportList,
      storeMainTableDetail,
      // Pansupports,
      // themeIcone,
      // toggleIcon,
      // path,
    }
  }
  }
</script>

<style>

.container-max{
  max-width: 1740px!important;
}

</style>