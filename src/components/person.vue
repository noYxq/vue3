<template>
    <div class="talk">
        <button @click="get">获取句子</button>
        <ul>
            <li v-for="item in conststore.talkList" :key="item">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="talk">
    import { reactive } from 'vue';
    import axios from 'axios';
    import {nanoid} from 'nanoid';
    import {usePersonStore} from '@/store/person';
    
    // let talkList = reactive([])
    // async function get(){
    //     //发请求,连续结构赋值+重命名
    //     let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    //     //响应包装为对象
    //     let obj = {id:nanoid(),title}
    //     console.log(obj)
    //     talkList.unshift(obj)
        

    // }
    const conststore  = usePersonStore()

</script>

<style lang="scss" scoped>
    .talk{
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    select ,button{
        margin: 0 5px;
    }
</style>
