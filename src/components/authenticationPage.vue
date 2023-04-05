<template>

  <!-- <img src="../../public/heavenss.png" alt="1080*1920"> -->
  <body 
    style="max-height: fit-content;"
  >
    <v-parallax
    dark
    src="../heavenss1.jpg"
    >
    <v-container>
      <v-form @submit.prevent="submitForm">
        <div class="d-flex align-center flex-column">
          <v-card width="400" variant="tonal" class="mt-12" color="blue-grey-lighten-5">
             <v-row
              align="center"
              justify="center"
              style="height: 400px;"
            >
              <v-col
                class="text-center"
                cols="11"
              >
              <v-btn
                class="mb-3"
                color="blue-grey-darken-4"
                size="large"
                style="width: calc(var(--v-btn-height) + 20px); height: calc(var(--v-btn-height) + 20px);"
                icon
              >
              <svg-icon type="mdi" :path="authenticatorIcon"></svg-icon>
              </v-btn>
    
              <v-text-field
                v-model="formData.username"
                label="نام کاربری"
                required
                color="blue-grey-lighten-5"
              ></v-text-field>
    
              <v-text-field
                v-model="formData.password"
                label="رمز ورود"
                required
                type="password"
                color="blue-grey-lighten-5"
              ></v-text-field>
    
              <v-btn
                type="submit"
                rounded="lg"
                color="blue-grey-lighten-5"
                variant="outlined"
                block
                size="large"
              >
                ورود
              </v-btn>
                </v-col>
              </v-row>
              
              <!-- <label color="red-darken-4" for="">نام کاربری یا رمز عبور اشتباه است!</label> -->

              <!-- <v-footer v-bind="localAttrs" > -->
                <v-card variant="tonal">
                  <v-card-text>
                    <h4 for="">مدیریت انبار چدن شرکت هماور یگانه و نوآور صنعت</h4>
                  </v-card-text>
                </v-card>
              <!-- </v-footer> -->
    
            </v-card>

            <v-snackbar
              v-model="snackbar"
              :timeout="timeout"
            >
              {{ text }}

              <template v-slot:actions>
                <v-btn
                  color="red"
                  variant="text"
                  @click="snackbar = false"
                >
                  بستن
                </v-btn>
              </template>
            </v-snackbar>
        </div>
      </v-form>
      </v-container>
    </v-parallax>
  </body>

</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiShieldAccount } from '@mdi/js';
import { reactive } from '@vue/reactivity';

export default {

  components: {
    SvgIcon
  },

  data() {

    return {
       authenticatorIcon: mdiShieldAccount,
       snackbar: false,
        text: 'نام کاربری یا رمز عبور اشتباه است!',
        timeout: 3000,
    }
  },

  methods:{
    submitForm(){
      if(this.formData.username == 'atari' && this.formData.password == '123456'){
        this.$router.push({path:'/mainpage'})
      }
      else{
        this.snackbar = true
      }
  },
},

  setup(){
    const formData = reactive({
      username: null,
      password: null,
    })

    

    return{
      formData,
    }
  }
  
}
</script>

<style>
/* html,
body{
  min-height: 100%;
  width: 100%;
} */
</style>