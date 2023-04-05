<template>
  <div>
    <v-row>
      <v-col md="2" cols="12" class="d-none d-sm-none d-md-flex">
        <v-container>
          <v-card  class="thin-border">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-row no-gutters>
                  <v-col
                  cols="12"
                  offset="1"
                  md="3">
                    <h4 class='mt-1'>فیلترها</h4>
                  </v-col>
                  <v-col
                  cols="12"
                  offset="3"
                  md="5">
                  <v-btn @click="refreshFilters" size="small" color="cyan-darken-1" variant="plain">
                    حذف فیلترها
                  </v-btn>
                  </v-col>
                </v-row>
                <v-divider class="my-2"></v-divider>
    
                <v-list-item
                  link
                  color="grey-lighten-4"
                >
                  <v-list-item-title>
                    <v-radio-group v-model="radioGroup">
                      <v-radio label="همه ی تراکنش ها" value='1'></v-radio>
                      <v-radio label="تراکنش های ورودی " value='2'></v-radio>
                      <v-radio label="تراکنش های خروجی" value='3'></v-radio>
                      <v-radio label="جا به حایی در انبار" value='4'></v-radio>
                    </v-radio-group>
                    
                    <hr style="opacity: 40%;">

                    <v-select
                      label="بر اساس انبار"
                      :items="['انبار سوله', 'انبار حیاط', 'انبار پشتی']"
                      variant="underlined"
                      multiple
                      chips
                    ></v-select>

                    <!-- <input type="radio" id="allTransaction" value="1" v-model="picked">
                    <label for="allTransaction">همه ی تراکنش ها</label>
                    <br>
                    <input type="radio" id="incomeTransaction" value="2" v-model="picked">
                    <label for="allTransaction">تراکنش های ورودی </label> -->

                    <!-- <v-checkbox label="Checkbox" v-model="radioGroup" value="red"></v-checkbox> -->
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-card>
        </v-container>
      </v-col>

      <v-col cols="12" md="10">
        <v-container>
          <!-- <v-row>
            <v-col>
              <v-card variant="outlined">
                <h3>گزارشات تراکنش های انبار</h3>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card>
                sdfsdfsdf
              </v-card>
            </v-col>
          </v-row> -->

          <v-card>
          <v-toolbar
            rounded
            color="teal darken-4"
            title="گزارشات تراکنش های انبار"
          >
        </v-toolbar>
          <v-card-text>
            sdfsdfsdf
          </v-card-text>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const radioGroup = ref('2')

    function refreshFilters(){
      radioGroup.value = ''
    }
  
  return{
    radioGroup,
    refreshFilters,
  }
  }
}
</script>

<style>

.thin-border{
  border-width: thin;
  box-shadow: none;
}

.v-selection-control__input input {
    cursor: pointer;
    position: absolute;
    left: .68rem!important;
    top: .58rem!important;
    width: 50%!important;
    height: 50%!important;
    opacity: 1!important;
}

</style>