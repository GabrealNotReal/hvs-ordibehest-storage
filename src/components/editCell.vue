<template>
  <html lang="ar" dir="rtl" class="shabnam-font">
      
  </html>
  <div>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="iconBtnSmall"
          color="error"
          :rounded="0"
          :disabled="itemSelected.model == 'کمپرسور'"
        >
        {{itemSelected.model}}
        <!-- <v-tooltip activator="parent" text="Tooltip"> {{item.subLine}} {{item.gap}} {{itemSelected.column}}  {{item.subGap }}</v-tooltip> -->
        <div style="display: block;
                    position: absolute;
                    bottom: 0;
                    left: 1px;
                    font-size: x-small;
                    color: #ffffffa8;"
        >
          {{item.gap}}{{item.subGap}}{{item.plaque}}
        </div>
        <div style="display: block;
                    position: absolute;
                    bottom: 0;
                    right: 1px;
                    font-size: x-small;
                    color: #ffffffa8;"
        >
          {{item.subLine}}{{itemSelected.column}}
        </div>
        </v-btn>
      </template>
      
    <v-list>
      <v-list-item
      >
        <v-list-item-title>
          <v-btn
            size="large"
            color="teal darken-4"
            height: auto
            class=" shabnam-font"
            @click="picking()"
          >
            برداشت کردن
          </v-btn> 
          </v-list-item-title>
          <v-list-item-title>
          <v-btn
            size="large"
            height: auto
            color="orange-darken-1"
            class=" mt-1 shabnam-font"
            block
            @click="putting()"
          >
              اضافه کردن
          </v-btn>
        </v-list-item-title>
      </v-list-item>
    </v-list>
    </v-menu>


    <v-virtual-scroll
      :item-height="50"
      height="500"
      >

      <v-dialog
          transition="dialog-bottom-transition"
          v-model="pick"
        >
          <!-- <template v-slot:activator="{ props }">
            <v-btn
            :rounded="0"
            size="large" class="iconBtnSmall"
            color="error" v-bind="props" 
            :disabled="itemSelected.model == 'کمپرسور'"
            >{{itemSelected.model}}
          </v-btn>
          </template> -->
          <template v-slot:default="{ isActive }">
              <div lang="ar" dir="rtl" class="shabnam-font"> 
                  
                <v-form @submit.prevent="submitForm">
                  <v-card>
                    <v-toolbar
                      color="teal darken-4"
                      title="برداشت از این خانه"
                    ></v-toolbar>

                    <v-progress-linear :active="this.formLoading"  :indeterminate="this.formLoading" color="teal-lighten-5" bottom absolute></v-progress-linear>

                    <v-container v-if="this.addressStatus">
                      <v-alert
                        closable
                        icon="$error"
                        type="error"
                        border="start"
                      >
                      <v-row>
                        <v-col
                        cols="auto"
                        >
                          <svg-icon type="mdi" :path="errorIcon"></svg-icon>
                        </v-col>
                        <v-col
                          cols="auto"
                        >
                          <h3>
                          نقص آدرس
                          </h3> 
                        </v-col>
                    </v-row>
                      <div>
                        ابتدا آدرس را کامل نمایید!
                      </div>  
                      </v-alert>
                    </v-container>

                    <v-card-text>
                      <!-- <div class="text-h2 pa-12">Hello world!</div> -->
                      <v-form v-model="valid">
                        <v-container>
                          <v-row>
                            <v-col
                              cols="12"
                              md="6"
                            >
                              <v-text-field
                                v-model="formData.locationSelected"
                                variant="outlined"
                                label="آدرس اولیه"
                                disabled
                              ></v-text-field>
                            </v-col>
                          
                            <v-col
                              cols="12"
                              md="3"
                            >
                              <v-text-field
                                v-model="formData.model"
                                label="مدل"
                                variant="outlined"
                                class="font-weight-black v-text-field"
                                disabled
                              ></v-text-field>
                            </v-col>
                          
                            <v-col
                              cols="12"
                              md="3"
                            >
                              <v-text-field
                                v-model="formData.stockQty"
                                variant="outlined"
                                label="تعداد موجود"
                                disabled
                              ></v-text-field>
                            </v-col>
                          </v-row>
  
                          <v-divider class='mt-3 mb-4'></v-divider>
  
                          <label class="text-center d-block text-h6">
                            تعداد جا به جایی
                          </label>
                          <v-slider
                          class="mb-3"
                            v-model="formData1.qtyToGo"
                            thumb-label="always"
                            :max="qtyToGoSlider.max"
                            :min="qtyToGoSlider.min"
                            :step="1"
                          ></v-slider>
  
                          <label class="text-center d-block text-h6 mb-2">
                            آدرس جدید را وارد کنید
                          </label>
                          <v-row>
                            <v-col cols="12" md="12">
                              <v-select
                                label="محل انتقال"
                                :items="locationItem.goTo"
                                item-title="name"
                                item-value="id"
                                v-model="formData1.goTo"
                              ></v-select>
                            </v-col>
                          </v-row>
  
                          <v-row>
                            <v-col cols="12" md="6">
                              <v-select
                                v-if="formData1.goTo == 1"
                                :on-click="changeLocation()"
                                label="محل انبار"
                                :items="locationItem.location"
                                item-title="name"
                                item-value="id"
                                v-model="formData1.newCell.location"
                              ></v-select>
                            </v-col>
  
                            <v-col
                              cols="12"
                              md="6"
                            >
                            <div v-for="location in locationItem.location" :key="location.id" >
                              <div v-if= "location.id == formData1.newCell.location && formData1.goTo == 1">
                                <v-select
                                  v-if= 'location.id != 3'
                                  label="ستون"
                                  :items="location.column"
                                  item-title="name"
                                  item-value="id"
                                  v-model="formData1.newCell.column"
                                ></v-select>
                                
                                <v-select
                                  v-if= 'location.id == 3'
                                  label="پلاک"
                                  :items="location.plaque"
                                  item-title="name"
                                  item-value="id"
                                  v-model="formData1.newCell.plaque"
                                ></v-select>
                              </div>
                            </div>
                              </v-col>
                          </v-row>
                            
                          <div v-for="location in locationItem.location" :key="location.id" >
                            <div v-if= "location.id == formData1.newCell.location && formData1.goTo == 1 && location.id != 3">
                              <v-row>
                                <v-col
                                  cols="12"
                                  md="6"
                                >
                                  <v-select
                                    label="دهنه"
                                    :items="location.gap"
                                    item-title="name"
                                    item-value="id"
                                    v-model="formData1.newCell.gap"
                                  ></v-select>
                                </v-col>
  
                                <v-col
                                  cols="12"
                                  md="6"
                                >
                                  <v-select
                                    label="ردیف"
                                    :items="location.subGap"
                                    item-title="name"
                                    item-value="id"
                                    v-model="formData1.newCell.subGap"
                                  ></v-select>
                                </v-col>
                                  
                                <!-- <v-col
                                  cols="12"
                                  md="6"
                                >
                                  <v-select
                                    label="بخش"
                                    :items="location.part"
                                    item-title="name"
                                    item-value="id"
                                    v-model="formData1.newCell.part"
                                  ></v-select>
                                </v-col> -->
                              </v-row>

                              <v-btn
                                color="warning"
                                size="large"
                                @click="checkAddress"
                              >
                                چک کردن آدرس
                              </v-btn>
                            </div>
                          </div>
                        </v-container>
                      </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-end ml-4 mb-3">
                      <v-container>
                        <v-row>
                          <v-col
                          cols="12"
                          md="2">
                            <v-btn
                              variant="tonal"
                              color="error"
                              size="large"
                              block
                              @click="isActive.value = false ; cleanPickForm()"
                            >
                              بستن
                            </v-btn>
                          </v-col>

                          <v-col
                          cols="12"
                          md="10">
                            <v-btn
                              variant="tonal"
                              color="success"
                              size="large"
                              type="submit"
                              block
                            >
                              تایید
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </div>
  
          </template>
        </v-dialog>
    </v-virtual-scroll>




    <v-dialog
        transition="dialog-bottom-transition"
        v-model="put"
      >

        <template v-slot:default="{ isActive }">
            <div lang="ar" dir="rtl" class="shabnam-font"> 
                
              <v-form @submit.prevent="submitForm">
                <v-card>
                  <v-toolbar
                    color="teal darken-4"
                    title="اضافه کردن به این خانه"
                  ></v-toolbar>
                  <v-card-text>
                    <!-- <div class="text-h2 pa-12">Hello world!</div> -->
                    <v-form v-model="valid">
                      <v-container>
                        <v-row>
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <v-text-field
                              v-model="formData.locationSelected"
                              variant="outlined"
                              label="آدرس اولیه"
                              disabled
                            ></v-text-field>
                          </v-col>
                        
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <v-text-field
                              v-model="formData.model"
                              label="مدل"
                              variant="outlined"
                              class="font-weight-black v-text-field"
                              disabled
                            ></v-text-field>
                          </v-col>
                        
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <v-text-field
                              v-model="formData.stockQty"
                              variant="outlined"
                              label="تعداد موجود"
                              disabled
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-divider class='mt-3 mb-4'></v-divider>

                        <label class="text-center d-block text-h6">
                          تعداد اضافه شده
                        </label>
                        <v-text-field
                          v-model="formData2.addedQty"
                          variant="outlined"
                          label="تعداد اضافه شده"
                        ></v-text-field>

                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-card-actions class="justify-end ml-4 mb-3">
                    <v-container>
                      <v-row>
                        <v-col
                        cols="12"
                        md="2">
                          <v-btn
                            variant="tonal"
                            color="error"
                            size="large"
                            block
                            @click="isActive.value = false ; cleanPutForm()"
                          >
                            بستن
                          </v-btn>
                        </v-col>
                        <v-col
                        cols="12"
                        md="10">
                          <v-btn
                            variant="tonal"
                            color="success"
                            size="large"
                            type="submit"
                            block
                          >
                            تایید
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-actions>
                </v-card>
              </v-form>
            </div>

        </template>
      </v-dialog>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import {useOrdibeheshtStorageStore} from '../components/store/ordibeheshtStorageStore'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCloseCircle  } from '@mdi/js';

export default {
    props:{
        item : Object,
        itemSelected : Object,
    },

    data () {

      return {
        addOrEdit: false,
        errorIcon: mdiCloseCircle ,
      }
    },

    components:{
      SvgIcon
    },

    methods:{

    },


    setup(props){
      
      const pick =ref(false)
      const put =ref(false)

        const formData = reactive({
          model: props.itemSelected.model,
          stockQty: props.itemSelected.qty,
          locationSelected : props.item.location + ' ، ستون:' + props.itemSelected.column + ' ، دهنه:' + props.item.gap + ' ، ردیف:' + props.item.subGap + ' ، بخش:' + props.item.subLine,
          goTo: '',
        })

        const formData1 = reactive({
          qtyToGo:  props.itemSelected.qty,
          goTo: '',
          newCell:{
            location:null,
            column:null,
            gap:null,
            subGap:null,
            part:null,
            plaque:null,
          }
        })

        const formData2 =reactive({
          addedQty: null
        })

        let formLoading = ref(false)
         
        const qtyToGoSlider = reactive({
          min: 1,
          max: props.itemSelected.qty,
        })

        let addressStatus =ref(false)
        
        const locationItem = reactive({
          goTo:[
            {
              id:1,
              name:'جا به جایی داخل انبار' 
            },
            {
              id:2,
              name:'خروج از انبار' 
            }],
          location:[
            {
              id: 1,
              name: 'انبار سوله اصلی' ,
              column:['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I'],
              gap:[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8],
              subGap:[1 , 2 , 3 , 4 , 5],
              // part:[1 , 2]
            },
            {
              id: 2,
              name: 'انبار دوم' ,
              column:['A' , 'B' , 'C' , 'D'],
              gap:[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8],
              subGap:[1 , 2 , 3 , 4],
              // part:[1 , 2]
            },
            {
              id: 3,
              name: 'انبار سوم' ,
              plaque:[],
              column:['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I'],
              gap:[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8],
              subGap:[1 , 2 , 3 , 4 , 5],
              // part:[1 , 2]
            }],
          })

        const store = useOrdibeheshtStorageStore()

        function submitForm(){
          console.log('submit pipi')
        }

        // function changeGoTo(){
        //   // formData1.newCell.location = null
        // }

        function changeLocation(){
          formData1.newCell.column = null
          formData1.newCell.gap = null
          formData1.newCell.subGap = null
          formData1.newCell.plaque = null
        }

        function cleanPickForm(){
          formData1.qtyToGo = props.itemSelected.qty,
          formData1.goTo = '',
          formData1.newCell.location = null,
          formData1.newCell.column = null,
          formData1.newCell.gap = null,
          formData1.newCell.subGap = null,
          formData1.newCell.part = null
          formData1.newCell.plaque = null
        }

        function cleanPutForm(){
          formData2.addedQty = null
        }

        async function checkAddress(){
          if(formData1.newCell.column == null || formData1.newCell.gap == null || formData1.newCell.subGap == null){
            addressStatus.value = true
          }
          else{
            addressStatus.value = false
            formLoading.value = true
            await (store.checkAddress(formData1))
            formLoading.value= false
          }
        }

        function picking(){
          pick.value = true
          // console.log(props.item.locationID)
          if(props.item.locationID == 3){
            formData.locationSelected = props.item.location + ' ، پلاک:' + props.item.plaque + ' ، بخش:' + props.itemSelected.column
            // console.log('pii')
          }
          for (var i = 1; i <= 100; i++) {
            locationItem.location[2].plaque.push(i);
          }
        }

        function putting(){
          put.value = true
          // console.log(props.item.locationID)
          if(props.item.locationID == 3){
            formData.locationSelected = props.item.location + ' ، پلاک:' + props.item.plaque + ' ، بخش:' + props.itemSelected.column
            // console.log('pii')
          }
        }

        return{
            formData,
            formData1,
            formData2,
            qtyToGoSlider,
            locationItem,
            submitForm,
            changeLocation,
            cleanPickForm,
            cleanPutForm,
            checkAddress,
            addressStatus,
            formLoading,
            picking,
            putting,
            pick,
            put,
            // changeGoTo,
        }

    }

}
</script>

<style>

  .iconBtnSmall{
    --v-btn-height: 51px!important;
    min-height: -webkit-fill-available;
    min-width: -webkit-fill-available!important;
    border-radius: 0;
  }

  .smallPaddingCell{
    padding: 0rem!important;
    margin: 0rem!important;
  }

  .v-text-field input {
    font-size: 1.3rem!important;
  }
</style>