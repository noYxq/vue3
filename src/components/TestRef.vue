<template>
  <dev class="app">
      <h1> 一辆{{car.brand}}车，价值{{car.price}}</h1>
      <button @click="changeBrand">修改品牌</button><br/>
      <button @click="changePrice">修改价格</button><br/>
      <button @click="changeCar">修改品牌</button><br/>
    
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
      <h2>temp:{{temp}}</h2>
      <button @click="changeTemp">新增</button>
      
  </dev>
</template>

<script lang="ts" setup name="TestRef">
  import {reactive, ref} from 'vue'
import func from '../../vue-temp/vue-editor-bridge'
  let car = ref({brand:'奔驰',price:100})
  let games = ref([
    {id:'wangzhe',name:'王者荣耀'},
    {id:'yuanshen',name:'元神'}
  ])
  let temp = ref(1)
  let obj =  ref({a:{b:{c:{d:0}}}})
  function changePrice(){
    car.value.price +=10
    console.log(car.value.price)
  }
  function changeFirstGame(){
    games.value[0].name = 'zhangwnag'
  }
  function changeObj(){
    obj.value.a.b.c.d +=1
  }
  function changeBrand(){
    car.value.brand='大众'
  }
  function changeCar(){
    car.value = {brand:'三林',price:12}
  }
  function changeTemp(){
    temp.value = 10
  }

</script>
<style>
  /** 样式 */
  .app {
    background-color: red;
    font-size: 20px;
  }
</style>