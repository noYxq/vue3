<template>
    <div class="count">
        <h2>当前求和为：{{constore.sum}}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <h2>语言:{{constore.language}}</h2>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

 
<script setup lang="ts" name="Count">
    import {ref,reactive, toRefs} from "vue"
    import {useCountStore} from '@/store/count';
    import {storeToRefs} from 'pinia';
    const  constore = useCountStore()
    let obj = reactive({
        a:1,b:2,c:ref(3)
    })
    //storeToRef只关注store中的数据，对方法不包裹
    console.log("ceshi:",storeToRefs(constore))
    //ref必须value
    let x = ref(9)
   console.log(x.value)
//    console.log(obj.a)
//    console.log(constore.sum)
//    console.log(constore.$state.sum)



    let sum = ref(1)
    let n = ref(1)
    
    function add(){
        //方法1:
        // constore.sum +=1
        //方法二
        // constore.$patch({
        //     sum:111,
        //     language:'中文。。'
        // })
        //第三种
        constore.increment(n.value)

    }

    function minus(){
    }
</script>

<style lang="scss" scoped>
.count{
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    select ,button{
        margin: 0 5px;
        height: 25px;
    }
</style>