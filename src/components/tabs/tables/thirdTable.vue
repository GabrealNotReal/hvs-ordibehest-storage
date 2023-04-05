<template>
  <div>
    <v-toolbar
      rounded
      color="teal darken-4"
      title="انبار محوطه سوله"
    ></v-toolbar>
    <v-table class='rounded'>
      <thead>

        <tr>
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center text-h5" colspan="2">
            مدل چهارم
          </th> 
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center text-h5" colspan="2">
            مدل سوم 
          </th> 
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center text-h5" colspan="2">
            مدل دوم 
          </th> 
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center text-h5" colspan="2">
            مدل اول
          </th>
          <th style="border-bottom:0.5px solid #000" class="text-center" colspan="2">
            *
          </th>
        </tr>

        <tr>

          <!-- D -->
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center">
            تعداد
          </th>
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center">
            مدل
          </th>
          <!-- /D -->

          <!-- C -->
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center">
            تعداد
          </th>
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center">
            مدل
          </th>
          <!-- /C -->

          <!-- B -->
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center">
            تعداد
          </th>
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center">
            مدل
          </th>
          <!-- /B -->

          <!-- A -->
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center">
            تعداد
          </th>
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center">
            مدل
          </th>
          <!-- /A -->

          <!-- J -->
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center">
            پلاک 
          </th>
          <!-- /J -->
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item) in cells"
          :key="item.name"
        >

          <!-- D -->
          <td  class="smallPaddingCell" style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000 ; border-right:5px solid #000">
            <v-btn  size="large" color="warning"  class="iconBtnSmall">         
              {{ item.D.qty }}
            </v-btn>            
          </td>
          <td class="smallPaddingCell" style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000">
            <editTable v-if="item.D.qty != null && item.D.model != '' " :itemSelected="item.D" :item="item"  />
            <addInCell v-if="item.D.qty == null && item.D.model == '' " :itemSelected="item.D" :item="item"  />
          </td>
          <!-- D -->

          <!-- C -->
          <td  class="smallPaddingCell" style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000">
            <v-btn  size="large" color="warning" variant="tonal" class="iconBtnSmall">         
              {{ item.C.qty }}
            </v-btn>            
          </td>
          <td class="smallPaddingCell" style="border-bottom:0.5px solid #000 ;border-left:5px solid #000">
            <editTable v-if="item.C.qty != null && item.C.model != '' " :itemSelected="item.C" :item="item"  />
            <addInCell v-if="item.C.qty == null && item.C.model == '' " :itemSelected="item.C" :item="item"  />
          </td>
          <!-- C -->

          <!-- B -->
          <td  class="smallPaddingCell" style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000 ; border-right:5px solid #000">
            <v-btn  size="large" color="warning" variant="tonal" class="iconBtnSmall">         
              {{ item.B.qty }}
            </v-btn>            
          </td>
          <td class="smallPaddingCell" style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000">
            <editTable v-if="item.B.qty != null && item.B.model != '' " :itemSelected="item.B" :item="item"  />
            <addInCell v-if="item.B.qty == null && item.B.model == '' " :itemSelected="item.B" :item="item"  />
          </td>
          <!-- B -->

          <!-- A -->
          <td  class="smallPaddingCell" style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000">
            <v-btn  size="large" color="warning" variant="tonal" class="iconBtnSmall">         
              {{ item.A.qty }}
            </v-btn>            
          </td>
          <td class="smallPaddingCell" style="border-bottom:0.5px solid #000 ;border-left:5px solid #000">
            <editTable v-if="item.A.qty != null && item.A.model != '' " :itemSelected="item.A" :item="item"  />
            <addInCell v-if="item.A.qty == null && item.A.model == '' " :itemSelected="item.A" :item="item"  />
          </td>
          <!-- A -->


          <td style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000">
          <!-- <div v-if="index < 10"> {{ (((index/2)+1)) }} </div>
          <div v-if="index >= 10"> {{ (((index/2)%5)+1) }} </div> -->
          {{ item.plaque }}
          </td>

      
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
  import editTable from '../../editCell.vue'
  import addInCell from '../../addInCell.vue'
  import {useOrdibeheshtStorageStore} from '../../store/ordibeheshtStorageStore'
  import { computed, reactive } from '@vue/runtime-core'

  export default {
    components:{
      editTable,
      addInCell,
    },

    data () {
      return {
        cells: [
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 1,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: 23,
              model:'H231'
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 2,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 3,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          { 
            location : 'انبار سوم',
            locationID : 3, 
            plaque: 4,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 5,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 6,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 7,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 8,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 9,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 10,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 11,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 12,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 13,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 14,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 15,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 16,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 17,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 18,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 19,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 20,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 21,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 22,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 23,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 24,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 25,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 26,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 27,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 28,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 29,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 30,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 31,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 32,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 33,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 34,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 35,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 36,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 37,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 38,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 39,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 40,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 41,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 42,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 43,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 44,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 45,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 46,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 47,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 48,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 49,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 50,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 51,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 52,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 53,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 54,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 55,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 56,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 57,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 58,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 59,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 60,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 61,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 62,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 63,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 64,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 65,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: 23,
              model:'H231'
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 66,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 67,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          { 
            location : 'انبار سوم',
            locationID : 3, 
            plaque: 68,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 69,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 70,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 71,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 72,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 73,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 74,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 75,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 76,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 77,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 78,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 79,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 80,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 81,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 82,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 83,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 84,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 85,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 86,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 87,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 88,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 89,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 90,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 91,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 92,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 93,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 94,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 95,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 96,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 97,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 98,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 99,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 100,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 101,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 102,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 103,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 104,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 105,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 106,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 107,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 108,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 109,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 110,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 111,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 112,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 113,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 114,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 115,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 116,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 117,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 118,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 119,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 120,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 121,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 122,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 123,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 124,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 125,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 126,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 127,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 128,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 129,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 130,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 131,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 132,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 133,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 134,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 135,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 136,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 137,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 138,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 139,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 140,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 141,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 142,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 143,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 144,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 145,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 146,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 147,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 148,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 149,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار سوم',
            locationID : 3,
            plaque: 150,
            A:{
              column: 'اول',
              qty: null,
              model:''
            },
            B:{
              column: 'دوم',
              qty: null,
              model:''
            },
            C:{
              column: 'سوم',
              qty: null,
              model:''
            },
            D:{
              column: 'چهارم',
              qty: null,
              model:''
            },
          },
        ],

      }

    },
    setup(){

      const store = useOrdibeheshtStorageStore()

      const cells1 = computed(() => store.getSecondStorageCells);

      const loading = reactive({
        getStoreCells: false,
      })

      async function getStoreCells(){
        loading.getStoreCells = true;
        await store.getStoreSecondStorageCells();
        loading.getStoreCells = false;
      }

      getStoreCells()

      return{
        cells1,
        getStoreCells,
      }
    }
  }
</script>

<style>

  .iconBtnSmall{
    --v-btn-height: 30px;
    min-height: -webkit-fill-available;
    min-width: -webkit-fill-available!important;
    border-radius: 0;
  }

  .smallPaddingCell{
    padding: 0rem!important;
    margin: 0rem!important;
  }

  .borderForSubGap{
    border-bottom:5px solid #000
  }

  /* .borderForSubGap{
    border-bottom:3px solid #000
  } */

</style>