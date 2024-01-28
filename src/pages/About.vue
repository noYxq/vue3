<template>
    <dev class="about"> 
        <h2>关于vue</h2>

    </dev>
</template>

<script lang="ts" setup name="about">
    import {onMounted,onUnmounted} from 'vue'
    onMounted (()=>{
        console.log("about被挂载")
    })
    onUnmounted(()=>{
        console.log("about被卸载")
    })
</script>
<style scoper>
    .about{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        color:rgb(85,84,84);
        font-size: 18px;
    }
</style>