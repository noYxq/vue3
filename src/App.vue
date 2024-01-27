<template>
  <dev class="app">
      <!-- <TestRefValue></TestRefValue> -->
      <!-- <TestReactive></TestReactive> -->
      <TestToRef/>
    </dev>
</template>

<script lang="ts">
import { toRef } from 'vue';
//js/ts
import TestReactive from './components/TestReactive.vue';
import TestRefValue  from './components/TestRef.vue';
import TestToRef from './components/ToRef.vue'
 export default {
  name:'App',
  components:{TestRefValue,TestReactive,TestToRef}
 }
</script>

<style>
/** 样式 */

</style>