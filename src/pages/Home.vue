<template>
    <dev class="home"> home</dev>
</template>

<script lang="ts" setup name="home">
import { onMounted, useAttrs } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
//   onMounted(()=>{
//     setTimeout(()=>{
//         console.log('@'),
//         //编程式路由导航使用频率》〉routeLink，登录成功跳转
//         router.push('/about')
//     },3000)
//   })
</script>
<style scoped>
    .home{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>