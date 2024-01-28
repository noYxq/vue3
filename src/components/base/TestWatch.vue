<template>
    <h2> 当前求和：{{sum}}</h2>
    <button @click="sum++"> 点我++</button>
    <hr/>
    <h2>当前信息:{{msg}}</h2>
    <button @click="changeMsg">修改信息</button>
    <hr/>
    姓名：{{person.name}} <br/>
    年龄：{{person.age}}><br/>
    年薪: {{person.job.ji.salary}}<br/>
    <button @click="person.name +='~'">修改姓名</button>
    <button @click="person.age +=1">修改年龄</button>
    <button @click="person.job.ji.salary++">修改年薪</button>
</template>

<script>
import { ref,reactive,watch, watchEffect } from "vue";
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
    //方法1:
    // watch(sum,(newValue,oldValue)=>{
    //     console.log('sum变了',newValue,oldValue)
    // })
    //方法二：第一个参数是中括号
    // watch([sum,msg],(newValue,oldValue)=>{
    //     console.log('sum或msg变化了',newValue,oldValue)
    // },{immediate:true})
    //方法三
    // watch(()=>person.name,(newValue,oldValue)=>{
    //     console.log("person的name发生变化了",oldValue,newValue)
    // })
    //方法四
    // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
    //     console.log("person.name或age变化了",newValue,oldValue)
    // },{deep:false})
    //方法五
    // watch(()=>person.job,(newValue,oldValue)=>{
    //     console.log('personal的job发生变哈了',newValue,oldValue)
    // },{deep:true})
    //watchEffect 某个数据变更时触发
    watchEffect(()=>{
        const x1 = sum.value
        const x2 = person.job.ji.salary
        console.log("watchEffect 被调用了")
    })

    //todo 使用 方法三时，changeMsg 不能用了
    function changeMsg(){
        msg +=person.name
    }
    return {sum,msg,person,changeMsg}
  }
}   
</script>
