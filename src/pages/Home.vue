<template>
    <dev class="home"> home</dev>
</template>

<script lang="ts" setup name="home">
import { onMounted } from "vue";

  onMounted(()=>{
    setTimeout(()=>{
        console.log('@')
    },3000)
  })
</script>
<style scoped>
    .home{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>