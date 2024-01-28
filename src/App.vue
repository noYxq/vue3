<template>
  <dev class="app">
    <h2 ref="title2">您好</h2>
    <button @click="showLog">测试</button>
    <Person ref="ren"/>
  
    
    </dev>
</template>

<script lang="ts" setup name="App">
import  Person from './components/Person.vue';
import {ref} from 'vue'
let title =ref()
let ren = ref()
function showLog(){
  //保护部打印Person.vue的值
  console.log(ren.value)
}
</script>
  
<style>
/** 样式 */

</style>