<template>
    <h2>sum:{{sum}}</h2>
    <button @click="sum++">++</button>
    <hr/>
    <h2>当前鼠标坐标x:{{point.x}}</h2>
    <h2>当前鼠标坐标y:{{point.y}}</h2>
</template>

<script>
import { ref } from "vue";
import usePoint from '../../hook/usePoint.js'
export default {
    name:'',
    setup(){
        let sum = ref(0)
        let point = usePoint()
    return {sum,point}
    }
}
</script>
