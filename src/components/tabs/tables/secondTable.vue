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
            D 
          </th> 
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center text-h5" colspan="2">
            C 
          </th> 
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center text-h5" colspan="2">
            B 
          </th> 
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center text-h5" colspan="2">
            A
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
            *
          </th>
          <th style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" class="text-center">
            **
          </th>
          <!-- /J -->
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item,index) in cells"
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


          <td v-if="(index % 2) == 0" style="border-bottom:0.5px solid #000 ;border-left:0.5px solid #000" rowspan="2">
          <!-- <div v-if="index < 10"> {{ (((index/2)+1)) }} </div>
          <div v-if="index >= 10"> {{ (((index/2)%5)+1) }} </div> -->
          {{ item.subGap }}
          </td>
          <td v-if="(index % 8) == 0" style="border-bottom:0.5px solid #000 ; border-left:1.5px solid #000" rowspan="8">{{ item.gap }}
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
            location : 'انبار دوم',
            gap : 8,
            subGap: 4,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: 23,
              model:'H231'
            },
          },
          {
            location : 'انبار دوم',
            gap : 8,
            subGap: 4,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 8,
            subGap: 3,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          { 
            location : 'انبار دوم',
            gap : 8, 
            subGap: 3,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 8,
            subGap: 2,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 8,
            subGap: 2,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 8,
            subGap: 1,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 8,
            subGap: 1,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 7,
            subGap: 4,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 7,
            subGap: 4,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 7,
            subGap: 3,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 7,
            subGap: 3,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 7,
            subGap: 2,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 7,
            subGap: 2,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 7,
            subGap: 1,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 7,
            subGap: 1,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 6,
            subGap: 4,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 6,
            subGap: 4,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 6,
            subGap: 3,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 6,
            subGap: 3,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 6,
            subGap: 2,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 6,
            subGap: 2,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 6,
            subGap: 1,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 6,
            subGap: 1,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 5,
            subGap: 4,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 5,
            subGap: 4,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 5,
            subGap: 3,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 5,
            subGap: 3,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 5,
            subGap: 2,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 5,
            subGap: 2,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 5,
            subGap: 1,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 5,
            subGap: 1,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 4,
            subGap: 4,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 4,
            subGap: 4,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 4,
            subGap: 3,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 4,
            subGap: 3,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 4,
            subGap: 2,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 4,
            subGap: 2,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 4,
            subGap: 1,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 4,
            subGap: 1,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 3,
            subGap: 4,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 3,
            subGap: 4,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 3,
            subGap: 3,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 3,
            subGap: 3,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 3,
            subGap: 2,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 3,
            subGap: 2,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 3,
            subGap: 1,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 3,
            subGap: 1,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 2,
            subGap: 4,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 2,
            subGap: 4,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 2,
            subGap: 3,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 2,
            subGap: 3,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 2,
            subGap: 2,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 2,
            subGap: 2,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 2,
            subGap: 1,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 2,
            subGap: 1,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 1,
            subGap: 4,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 1,
            subGap: 4,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 1,
            subGap: 3,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 1,
            subGap: 3,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 1,
            subGap: 2,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 1,
            subGap: 2,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 1,
            subGap: 1,
            subLine: 'اول',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
              qty: null,
              model:''
            },
          },
          {
            location : 'انبار دوم',
            gap : 1,
            subGap: 1,
            subLine: 'دوم',
            A:{
              column: 'A',
              qty: null,
              model:''
            },
            B:{
              column: 'B',
              qty: null,
              model:''
            },
            C:{
              column: 'C',
              qty: null,
              model:''
            },
            D:{
              column: 'D',
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