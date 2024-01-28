<template>
    <dev class="news"> 
        <ul>
            <li v-for = "news in newList" :key="news.id">
                <!-- query方法1-->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}
                &title=${news.title}&content=${news.content}`"> -->
                <!--query 方法2-->
                <RouterLink 
                :to="{path:'detail',//path值可以用/new/detail取代
                query:{
                    id:news.id,
                    title:news.title,
                    content:news.content
                }
            }"    
                >
                    {{news.content}}
                </RouterLink>
            </li>
        </ul>
    <div class="news-content">
        <RouterView></RouterView>
    </div>
    </dev>
</template>

<script lang="ts" setup name="news">
  import {reactive} from 'vue'
  import {RouterView,RouterLink} from 'vue-router'
  const newList = reactive([
    {id:'1',title:'京东生鲜',content:'西兰花'},
    {id:'2',title:'京东家电',content:'洗衣机'},
    {id:'3',title:'秒杀',content:'miaosha'},
    {id:'4',title:'京东手机',content:'小米'},
    {id:'5',title:'电子数码',content:'pencil'},
    {id:'6',title:'进口好物',content:'爱马仕'},
    {id:'7',title:'拍卖',content:'秦朝砖'},
    {id:'8',title:'plus会员',content:'100券'},
    {id:'9',title:'京东五金城',content:'公牛插座'}
  ])
</script>
<style scoped>
    .news{
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        height: 100%;
    }
    .news ul{
        margin-top: 30px;
        /** **/
        /* list-style: none; */
        padding-left: 10px;
    }
    .news ul::marker{
        color: #64967E;
    }
    .news li>a {
        font-size: 18px;
        line-height: 40px;
        text-decoration: none;
        color: #64967e;
        text-shadow: 0 0 1px rgb(0,84,0);
    }
    .news-content{
        width: 70%;
        height: 90%;
        border: 1px solid;
        margin-top: 20px;
        border-radius:10
    }
</style>