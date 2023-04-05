<template>
    <html lang="ar" dir="rtl" class="shabnam-font">
        
    </html>
    <div>
      <v-dialog
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ props }">
            <v-btn
            @click="getPansupportList"
            :rounded="0"
            size="large" class="iconBtnSmall"
            color="success" v-bind="props" 
            >

<!-- <br>-->
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
          <template v-slot:default="{ isActive }">
              <div lang="ar" dir="rtl" class="shabnam-font"> 
                  
                <v-form @submit.prevent="submitForm">
                  <v-card>
                    <v-progress-linear :active="loading.getPansupportList"  :indeterminate="loading.getPansupportList" color="teal-lighten-5" absolute></v-progress-linear>
                    <v-toolbar
                      color="teal darken-4"
                      title="ورود محصول جدید"
                    ></v-toolbar>


                    <v-card-text>
                      <!-- <div class="text-h2 pa-12">Hello world!</div> -->
                      <v-form v-model="valid">
                        <v-container>
                          <v-row>
                            <v-col
                              cols="12"
                              md="12"
                            >
                              <v-text-field
                                v-model="formData.locationSelected"
                                variant="outlined"
                                label="آدرس سلول"
                                disabled
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col
                              cols="12"
                              md="12"
                            >
                              <v-autocomplete
                                id="pansupportModel"
                                v-model="formData.model"
                                :items="Pansupports"
                                chips
                                closable-chips
                                item-title="code"
                                item-value="id"
                                label="مدل محصول"
                                class="font-weight-black v-text-field"
                              >
                                <template v-slot:chip="{ props, item }">
                                  <v-chip
                                    class="mr-15"
                                    v-bind="props"
                                    :text="item.raw.name +' | کد: ' + item.raw.code"
                                  ></v-chip>
                                </template>

                                <template v-slot:item="{ props, item }">
                                  <v-list-item
                                    v-bind="props"
                                    :title="item?.raw?.code"
                                    :subtitle="item?.raw?.name"
                                  ></v-list-item>
                                </template>
                              </v-autocomplete>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col
                              cols="12"
                              md="12"
                            >
                              <v-text-field
                                v-model="formData.qty"
                                variant="outlined"
                                label="تعداد"
                              ></v-text-field>
                            </v-col>
                          </v-row>
  
                      </v-container>
                      </v-form>
                    </v-card-text>
                      <v-card-actions class="justify-end ml-4 mb-3">
                        <v-row>
                        <v-col
                        cols="12"
                        md="2">
                          <v-btn
                            variant="tonal"
                            color="error"
                            size="large"
                            block
                            @click="isActive.value = false ; cleanForm()"
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
                    </v-card-actions>
                  </v-card>
                </v-form>
              </div>
  
          </template>
        </v-dialog>
    </div>
  </template>
  
  <script>
  import { reactive } from '@vue/reactivity'
  import {useOrdibeheshtStorageStore} from '../components/store/ordibeheshtStorageStore'
  import { computed } from '@vue/runtime-core'


  export default {
      props:{
          item : Object,
          itemSelected : Object,
      },
  
      data () {
  
        return {
          select: { code: 'کد', id: 'آی دی' },
        }
      },
  
      methods:{
  
      },
  
  
      setup(props){
  
          const formData = reactive({
              model:null,
              qty: null,
              locationSelected : props.item.location + ' ، ستون:' + props.itemSelected.column + ' ، دهنه:' + props.item.gap + ' ، ردیف:' + props.item.subGap + ' ، بخش:' + props.item.subLine,
              newCell:{
                location: props.item.location,
                column: props.itemSelected.column,
                gap: props.item.gap,
                subGap:props.item.subGap,
                part:props.item.subLine,
              }
            })
          
          const loading = reactive({
            getPansupportList: false
          })

          const store = useOrdibeheshtStorageStore()
          const Pansupports = computed(() => store.allPansupports);      
  
          function submitForm(){
            console.log('submit pipi')
          }

          async function getPansupportList(){
            loading.getPansupportList = true;
            await store.getPansupportList();
            if(props.item.locationID == 3){
            formData.locationSelected = props.item.location + ' ، پلاک:' + props.item.plaque + ' ، بخش:' + props.itemSelected.column
            // console.log('pii')
            }
            loading.getPansupportList = false;
          }

          function cleanForm(){
            formData.model = null;
            formData.qty = null;
          }
  
          return{
              formData,
              submitForm,
              getPansupportList,
              Pansupports,
              loading,
              cleanForm,
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