<template>
    <dev>
        <h1>中国</h1>
        <h2>北京</h2>
        <h3 ref="title2">尚硅谷</h3>
        <button @click="showLog"> 点我</button>
    </dev>
</template>
<script lang="ts" setup name="Person">
import { ref,defineExpose } from 'vue';
    //
    let title = ref()
    function showLog(){
        console.log("ceshi")
    }
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)   
    //加上后，引用当前vue的界面，可以拿到当前界面参数
    // defineExpose({a,b,c}) 
</script>