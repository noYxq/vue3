<template>
    <h2> 当前求和：{{sum}}</h2>
    <button @click="sum++"> 点我++</button>
    <hr/>
    <h2>当前信息:{{msg}}</h2>
    <button @click="msg+':'+person.name">修改信息</button>
    <hr/>
    姓名：{{person.name}} <br/>
    年龄：{{person.age}}><br/>
    年薪: {{person.job.ji.salary}}<br/>
    <button @click="person.name +='~'">修改姓名</button>
    <button @click="person.age +=1">修改年龄</button>
    <button @click="person.job.ji.salary++">修改年薪</button>
</template>

<script>
import { ref,reactive,watch } from "vue";
export default{
name:'Demo',
setup(){
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
        name:'张三',
        age:18,
        job:{ji:{
            salary:20
        }}
    })
    watch(sum,(newValue,oldValue)=>{
        console.log('sum变了',newValue,oldValue)
    })
    function changeMsg(){
        msg +=person.name
    }
    return {sum,msg,person}

}
}   
</script>
