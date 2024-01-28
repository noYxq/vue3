<template>
    <dev class="news"> 
        <ul>
            <li herf="#">新闻001</li>
            <li herf="#">新闻002</li>
            <li herf="#">新闻003</li>
            <li herf="#">新闻004</li>
            <li herf="#">新闻005</li>
        </ul>
    </dev>
</template>

<script lang="ts" setup name="news">
  
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
        list-style: node;
        padding-left: 10px;
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