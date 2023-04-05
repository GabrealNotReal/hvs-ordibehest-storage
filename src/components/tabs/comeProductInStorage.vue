<template>
<div>
    <v-form @submit.prevent="submitForm">
        <v-card>
          <v-toolbar
            rounded
            color="teal darken-4"
            title="ورود محصول جدید"
          >
        </v-toolbar>
          <v-card-text>
            <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="6"
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

                    <v-col
                    cols="12"
                    md='6'
                    >
                        <v-text-field
                          v-model="formData.qty"
                          label="تعداد کل ورودی"
                          class="font-weight-black"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-card variant="outlined">
                    <v-card-title>
                      <!-- <v-progress-linear :active="formLoading"  :indeterminate="formLoading" color="teal-lighten-5" absolute></v-progress-linear> -->
                        <v-toolbar title="محل جایگذاری">
                        </v-toolbar>
                    </v-card-title>
                    <v-card-item>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="11" block>
                                  <v-select

                                    label="محل انبار"
                                    :items="locationItem.location"
                                    item-title="name"
                                    item-value="id"
                                    v-model="location1"
                                  ></v-select>
                                </v-col>
                
                                <v-col
                                  cols="12"
                                  md="1"
                                >
                                    <v-btn 
                                    icon
                                    @click="addRow"
                                    :disabled="row === 1"
                                    >
                                     <svg-icon type="mdi" :path="addRowSign"></svg-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
            
                            <div v-for="location in locationItem.location" :key="location.id" >
                              <div v-if= "location.id == location1">
                                    <v-select
                                      label = "ستون"
                                      :items = "location.column"
                                      item-title = "name"
                                      item-value = "id"
                                      v-model = "formData.newCell1.column"
                                    ></v-select>
                                </div>
                            </div>
            
                            <div v-for="location in locationItem.location" :key="location.id" >
                              <div v-if= "location.id == location1">
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
                                      v-model="formData.newCell1.gap"
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
                                      v-model="formData.newCell1.subGap"
                                    ></v-select>
                                  </v-col>
                                </v-row>
                              </div>
                            </div>
                        </v-container>
                    </v-card-item>

                    <div v-if="row < 8">
                        <v-divider inset></v-divider>
                        <v-container>
                            <v-card-item>
                                <v-row>
                                <v-col cols="12" md="11" block>
                                  <v-select
                                    label="محل انبار"
                                    :items="locationItem.location"
                                    item-title="name"
                                    item-value="id"
                                    v-model="location2"
                                  ></v-select>
                                </v-col>
                
                                <v-col
                                  cols="12"
                                  md="1"
                                >
                                <v-btn 
                                  icon
                                  @click="delRow"
                                  v-if="row === 7" >
                                  <svg-icon type="mdi" :path="delRowSign"></svg-icon>
                                </v-btn>
                                </v-col>
                                </v-row>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location2">
                                        <v-select
                                          label="ستون"
                                          :items="location.column"
                                          item-title="name"
                                          item-value="id"
                                          v-model="formData.newCell2.column"
                                        ></v-select>
                                    </div>
                                </div>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location2">
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
                                          v-model="formData.newCell2.gap"
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
                                          v-model="formData.newCell2.subGap"
                                        ></v-select>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </div>
                                
                            </v-card-item>
                        </v-container>
                    </div>

                    <div v-if="row < 7">
                        <v-divider inset></v-divider>
                        <v-container>
                            <v-card-item>
                                <v-row>
                                <v-col cols="12" md="11" block>
                                  <v-select
                                    label="محل انبار"
                                    :items="locationItem.location"
                                    item-title="name"
                                    item-value="id"
                                    v-model="location3"
                                  ></v-select>
                                </v-col>
                
                                <v-col
                                  cols="12"
                                  md="1"
                                >
                                <v-btn 
                                  icon
                                  @click="delRow"
                                  v-if="row === 6" >
                                  <svg-icon type="mdi" :path="delRowSign"></svg-icon>
                                </v-btn>
                                </v-col>
                                </v-row>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location3">
                                        <v-select
                                          label="ستون"
                                          :items="location.column"
                                          item-title="name"
                                          item-value="id"
                                          v-model="formData.newCell3.column"
                                        ></v-select>
                                    </div>
                                </div>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location3">
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
                                          v-model="formData.newCell3.gap"
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
                                          v-model="formData.newCell3.subGap"
                                        ></v-select>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </div>
                                
                            </v-card-item>
                        </v-container>
                    </div>

                    <div v-if="row < 6">
                        <v-divider inset></v-divider>
                        <v-container>
                            <v-card-item>
                                <v-row>
                                <v-col cols="12" md="11" block>
                                  <v-select
                                    label="محل انبار"
                                    :items="locationItem.location"
                                    item-title="name"
                                    item-value="id"
                                    v-model="location4"
                                  ></v-select>
                                </v-col>
                
                                <v-col
                                  cols="12"
                                  md="1"
                                >
                                    <v-btn 
                                      icon
                                      @click="delRow"
                                      v-if="row === 5" >
                                      <svg-icon type="mdi" :path="delRowSign"></svg-icon>
                                    </v-btn>
                                </v-col>
                                </v-row>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location4">
                                        <v-select
                                          label="ستون"
                                          :items="location.column"
                                          item-title="name"
                                          item-value="id"
                                          v-model="formData.newCell4.column"
                                        ></v-select>
                                    </div>
                                </div>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location4">
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
                                          v-model="formData.newCell4.gap"
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
                                          v-model="formData.newCell4.subGap"
                                        ></v-select>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </div>
                                
                            </v-card-item>
                        </v-container>
                    </div>

                    <div v-if="row < 5">
                        <v-divider inset></v-divider>
                        <v-container>
                            <v-card-item>
                                <v-row>
                                <v-col cols="12" md="11" block>
                                  <v-select
                                    label="محل انبار"
                                    :items="locationItem.location"
                                    item-title="name"
                                    item-value="id"
                                    v-model="location5"
                                  ></v-select>
                                </v-col>
                
                                <v-col
                                  cols="12"
                                  md="1"
                                >
                                    <v-btn 
                                      icon
                                      @click="delRow"
                                      v-if="row === 4" >
                                      <svg-icon type="mdi" :path="delRowSign"></svg-icon>
                                    </v-btn>
                                </v-col>
                                </v-row>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location5">
                                        <v-select
                                          label="ستون"
                                          :items="location.column"
                                          item-title="name"
                                          item-value="id"
                                          v-model="formData.newCell5.column"
                                        ></v-select>
                                    </div>
                                </div>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location5">
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
                                          v-model="formData.newCell5.gap"
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
                                          v-model="formData.newCell5.subGap"
                                        ></v-select>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </div>
                                
                            </v-card-item>
                        </v-container>
                    </div>

                    <div v-if="row < 4">
                        <v-divider inset></v-divider>
                        <v-container>
                            <v-card-item>
                                <v-row>
                                <v-col cols="12" md="11" block>
                                  <v-select
                                    label="محل انبار"
                                    :items="locationItem.location"
                                    item-title="name"
                                    item-value="id"
                                    v-model="location6"
                                  ></v-select>
                                </v-col>
                
                                <v-col
                                  cols="12"
                                  md="1"
                                >
                                    <v-btn 
                                      icon
                                      @click="delRow"
                                      v-if="row === 3" >
                                      <svg-icon type="mdi" :path="delRowSign"></svg-icon>
                                    </v-btn>
                                </v-col>
                                </v-row>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location6">
                                        <v-select
                                          label="ستون"
                                          :items="location.column"
                                          item-title="name"
                                          item-value="id"
                                          v-model="formData.newCell6.column"
                                        ></v-select>
                                    </div>
                                </div>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location6">
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
                                          v-model="formData.newCell6.gap"
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
                                          v-model="formData.newCell6.subGap"
                                        ></v-select>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </div>
                                
                            </v-card-item>
                        </v-container>
                    </div>

                    <div v-if="row < 3">
                        <v-divider inset></v-divider>
                        <v-container>
                            <v-card-item>
                                <v-row>
                                <v-col cols="12" md="11" block>
                                  <v-select
                                    label="محل انبار"
                                    :items="locationItem.location"
                                    item-title="name"
                                    item-value="id"
                                    v-model="location7"
                                  ></v-select>
                                </v-col>
                
                                <v-col
                                  cols="12"
                                  md="1"
                                >
                                    <v-btn 
                                      icon
                                      @click="delRow"
                                      v-if="row === 2" >
                                      <svg-icon type="mdi" :path="delRowSign"></svg-icon>
                                    </v-btn>
                                </v-col>
                                </v-row>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location7">
                                        <v-select
                                          label="ستون"
                                          :items="location.column"
                                          item-title="name"
                                          item-value="id"
                                          v-model="formData.newCell7.column"
                                        ></v-select>
                                    </div>
                                </div>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location7">
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
                                          v-model="formData.newCell7.gap"
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
                                          v-model="formData.newCell7.subGap"
                                        ></v-select>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </div>
                                
                            </v-card-item>
                        </v-container>
                    </div>

                    <div v-if="row < 2">
                        <v-divider inset></v-divider>
                        <v-container>
                            <v-card-item>
                                <v-row>
                                <v-col cols="12" md="11" block>
                                  <v-select
                                    label="محل انبار"
                                    :items="locationItem.location"
                                    item-title="name"
                                    item-value="id"
                                    v-model="location8"
                                  ></v-select>
                                </v-col>
                
                                <v-col
                                  cols="12"
                                  md="1"
                                >
                                    <v-btn 
                                      icon
                                      @click="delRow"
                                      v-if="row === 1" >
                                      <svg-icon type="mdi" :path="delRowSign"></svg-icon>
                                    </v-btn>
                                </v-col>
                                </v-row>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location8">
                                        <v-select
                                          label="ستون"
                                          :items="location.column"
                                          item-title="name"
                                          item-value="id"
                                          v-model="formData.newCell8.column"
                                        ></v-select>
                                    </div>
                                </div>
                            
                                <div v-for="location in locationItem.location" :key="location.id" >
                                  <div v-if= "location.id == location8">
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
                                          v-model="formData.newCell8.gap"
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
                                          v-model="formData.newCell8.subGap"
                                        ></v-select>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </div>
                                
                            </v-card-item>
                        </v-container>
                    </div>

                    <v-card-actions class="justify-end ml-4 mb-3">
                        <v-container>
                            <v-row>
                              <v-col
                              cols="12"
                              md="12">
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
            </v-container>
            
          </v-card-text>
        </v-card>
    </v-form>
</div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlus } from '@mdi/js';
import { mdiMinus } from '@mdi/js';
import {useOrdibeheshtStorageStore} from '../store/ordibeheshtStorageStore'
import { computed } from '@vue/runtime-core';


export default {
    data() {
        return {
           addRowSign: mdiPlus,
           delRowSign: mdiMinus,
           pipidata: null
        }
    },

    components: {
    SvgIcon
    },

    watch:{
      location1(){
        this.changeLocation()
      }
    },

    methods:{
      changeLocation(){
        console.log('pipiz')
      }
    },
  
    setup(){
        const formData = reactive({
            model: null,
            qty: null,
            newCell1:{
              location:null,
              column:null,
              gap:null,
              subGap:null,
            //   part:null,
            },
            newCell2:{
              location:null,
              column:null,
              gap:null,
              subGap:null,
            //   part:null,
            },
            newCell3:{
              location:null,
              column:null,
              gap:null,
              subGap:null,
            //   part:null,
            },
            newCell4:{
              location:null,
              column:null,
              gap:null,
              subGap:null,
            //   part:null,
            },
            newCell5:{
              location:null,
              column:null,
              gap:null,
              subGap:null,
            //   part:null,
            },
            newCell6:{
              location:null,
              column:null,
              gap:null,
              subGap:null,
            //   part:null,
            },
            newCell7:{
              location:null,
              column:null,
              gap:null,
              subGap:null,
            //   part:null,
            },
            newCell8:{
              location:null,
              column:null,
              gap:null,
              subGap:null,
            //   part:null,
            },
        })

        const location1 = ref(null)
        const location2 = ref(null)
        const location3 = ref(null)
        const location4 = ref(null)
        const location5 = ref(null)
        const location6 = ref(null)
        const location7 = ref(null)

        const locationItem = reactive({
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
                column:['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I'],
                gap:[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8],
                subGap:[1 , 2 , 3 , 4 , 5],
                // part:[1 , 2]
              }],
            })

        const row = ref(8);

        // const formLoading = reactive(props.loading.formLoading) 
        // const Pansupports = reactive(props.Pansupports) 

        const store = useOrdibeheshtStorageStore()

        const Pansupports = computed(() => store.allPansupports);

        // const loading = reactive({
        //   formLoading: false
        // })

        function addRow() {
          row.value = row.value - 1;
        }

        function delRow() {
          row.value = row.value + 1;
          if(row.value == 8){
            formData.newCell2.location =null
            formData.newCell2.column =null
            formData.newCell2.gap =null
            formData.newCell2.subGap =null
          }
          else if(row.value == 7){
            formData.newCell3.location =null
            formData.newCell3.column =null
            formData.newCell3.gap =null
            formData.newCell3.subGap =null
          }
          else if(row.value == 6){
            formData.newCell4.location =null
            formData.newCell4.column =null
            formData.newCell4.gap =null
            formData.newCell4.subGap =null
          }
          else if(row.value == 5){
            formData.newCell5.location =null
            formData.newCell5.column =null
            formData.newCell5.gap =null
            formData.newCell5.subGap =null
          }
          else if(row.value == 4){
            formData.newCell6.location =null
            formData.newCell6.column =null
            formData.newCell6.gap =null
            formData.newCell6.subGap =null
          }
          else if(row.value == 3){
            formData.newCell7.location =null
            formData.newCell7.column =null
            formData.newCell7.gap =null
            formData.newCell7.subGap =null
          }
          else{
            formData.newCell8.location =null
            formData.newCell8.column =null
            formData.newCell8.gap =null
            formData.newCell8.subGap =null
          }
        }

        // function changeLocation(){
        //   formData.newCell1.column = null
        //   formData.newCell1.gap = null
        //   formData.newCell1.subGap = null
        //   console.log('pipi')
        // }

        // async function getPansupportList(){
        //     loading.formLoading = true;
        //     await store.getPansupportList();
        //     loading.formLoading = false;
        //   }

        return{
            formData,
            locationItem,
            // changeLocation,
            row,
            addRow,
            delRow,
            // formLoading,
            Pansupports,
            // getPansupportList,
            location1,
            location2,
            location3,
            location4,
            location5,
            location6,
            location7,
        }
    }

}
</script>

<style>

</style>