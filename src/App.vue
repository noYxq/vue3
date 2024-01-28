<template>
  <Person/>
</template>

<script lang="ts" setup name="App">
import { reactive } from 'vue';
import  Person from './components/base/Person.vue';
import {type PersonInter} from './types'
  let personList = reactive<Array<PersonInter>>([
    {id:"1",name:'zhansgan',age:1},
    {id:"2",name:'李四',age:1},
    {id:"3",name:'王五',age:1}
  ])
</script>
  
<style>
/** 样式 */

</style>