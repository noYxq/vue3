
<template>
  <dev class="app">
      <h1> 一辆{{person.name}}车，价值{{person.age}}</h1>
      <button @click="changeName">修改名字</button><br/>
      <button @click="changeAge">修改age</button><br/>

      
  </dev>
</template>


<script lang="ts" setup name="TestRef">
  import {reactive, toRef,toRefs} from 'vue'
  //toref 将用reactive 修饰的对象转换为ref可操作的
  let person = reactive({
    name:"zahnsgan",age:12
  })

  let {name,age} = toRefs(person)

  function changeName(){
    name.value +='a'
  }
  function changeAge(){
    age.value +=0.1;
  }
</script>
<style>
  /** 样式 */
  .app {
    background-color: red;
    font-size: 20px;
  }
</style>

