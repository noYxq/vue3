<template>
    <ul class="news-list">
        <li>编号：{{route.query.id}}</li>
        <li>标题：{{route.query.title}}</li>
        <li>内容：{{route.query.content}}</li>
    </ul>
</template>

<script setup lang="ts" name="detail">
    import {useRoute} from 'vue-router'
    //hooks 命名规范 usexxx
    let route = useRoute()
    //只对第一个有作用，从1个响应式对象中结构属性，这个对象会丢失属性
    // let {query} = route
    console.log('@',route)
</script >

<style  scoped>
    .news-list{
        list-style: none;
        padding-left: 20px;
    }
    .news-list>li{
        line-height: 30px;
    }
</style>