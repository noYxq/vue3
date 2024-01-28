<template>
  <dev class="app">
      <!-- <TestRefValue></TestRefValue> -->
      <!-- <TestReactive></TestReactive> -->
      <!-- <TestToRef/> -->
      <!-- <TestComputedVue/> -->
      <!-- <TestWatchVue/> -->
      <!-- <TestLifeCycleVue/> -->
      <TestwatchEffectVue/>
    </dev>
</template>

<script lang="ts">
import { toRef } from 'vue';
//js/ts
import TestReactive from './components/TestReactive.vue';
import TestRefValue  from './components/TestRef.vue';
import TestToRef from './components/ToRef.vue'
import TestComputedVue from './components/TestComputed.vue';
import TestWatchVue from './components/TestWatch.vue';
import TestLifeCycleVue from './components/TestLifeCycle.vue';
import TestwatchEffectVue from './components/TestwatchEffect.vue';



 export default {
  name:'App',
  components:{TestRefValue,TestReactive,TestToRef,
    TestComputedVue,TestWatchVue,TestLifeCycleVue,
    TestwatchEffectVue}
 }
</script>

<style>
/** 样式 */

</style>