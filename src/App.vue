<template>
  <dev class="app">
    <h2 class="title">vue路由测试</h2>
    <div class = "navigate">
      <!--第二种：路径跳转-->
      <RouterLink :to="{path:'/home'}" active-class="active">首页</RouterLink>
      <!--第二种：名字跳转-->
      <RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
      <!--第一种-->
      <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
    <div class="main-content">
      <RouterView/>
    </div>
  </dev>
</template>

<script lang="ts" setup name="App">
import {RouterView,RouterLink} from 'vue-router'
</script>
  
<style>
/** 样式 */
.title{ 
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg,gray,white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
}
.navigate{
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}
.navigate a{
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}
.navigate a.active{
  background-color:#64967E;
  columns: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}
.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 100%;
  height: 400px;
  border:1px solid;
}
</style>