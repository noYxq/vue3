<template>
  <dev class="app">
      <TestRefValue></TestRefValue>
    </dev>
</template>

<script lang="ts">
//js/ts
import TestReactive from './components/TestReactive.vue';
import TestRefValue  from './components/TestRef.vue';
 export default {
  name:'App',
  components:{TestRefValue,TestReactive}
 }
</script>

<style>
/** 样式 */

</style>