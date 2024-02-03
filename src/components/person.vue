<template>
    <div class="talk">
        <button @click="get">获取句子</button>
        <ul>
            <li v-for="item in talkList" :key="item">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="talk">
    import { reactive } from 'vue';
    import axios from 'axios';
    import {nanoid} from 'nanoid';
    let talkList = reactive([
        {id:'1','title':'吃饭'},
        {id:'2','title':'看书'},
        {id:'3','title':'写作业'},
        {id:'4','title':'找工作'},
        {id:'5','title':'买房'},
        {id:'6','title':'养老'}
])
    async function get(){
        //发请求,连续结构赋值+重命名
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //响应包装为对象
        let obj = {id:nanoid(),title}
        console.log(obj)
        talkList.unshift(obj)
        

    }

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
