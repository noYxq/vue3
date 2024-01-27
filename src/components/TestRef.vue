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