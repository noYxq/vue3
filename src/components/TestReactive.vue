<template>
  <dev class="app">
      <h1> 一辆{{car.brand}}车，价值{{car.price}}</h1>
      <button @click="changePrice">修改价格</button><br/>
      <h2>游戏列表</h2>
      <ul>
        <li v-for="g in games" :key="g.id">
          {{g.name}}
        </li>
      </ul>
      <button @click="changeFirstGame">修改第一个游戏名字</button>
      <hr>
      <h2>测试:{{obj.a.b.c.d}}</h2>
      <button @click="changeObj">新增</button>
  </dev>
</template>


<script lang="ts" setup name="Person">
  import {reactive} from 'vue'
  let car = reactive({brand:'奔驰',price:100})
  let games = reactive([
    {id:'wangzhe',name:'王者荣耀'},
    {id:'yuanshen',name:'元神'}
  ])
  let obj = reactive({a:{b:{c:{d:0}}}})
  function changePrice(){
    car.price +=10
    console.log(car.price)
  }
  function changeFirstGame(){
    games[0].name = 'zhangwnag'
  }
  function changeObj(){
    obj.a.b.c.d +=1
  }

</script>
<style>
  /** 样式 */
  .app {
    background-color: red;
    font-size: 20px;
  }
</style>