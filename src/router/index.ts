//创建路由器，暴露出去
import {createRouter,createWebHistory,
createWebHashHistory} from 'vue-router'
import Home from '@/pages/home.vue'
import News from '@/pages/news.vue'
import About from '@/pages/About.vue'


//创建路由器
const  router = createRouter({
    //hash模式和history模式
    //createWebHashHistory
    history:createWebHistory(),
        routes:[{
            path:'/home',
            component:Home
        },
        {
            path:'/news',
            component:News
        },
        {
            path:'/about',
            component:About
        },
    
    
    ]
    })
    //暴露router
    export default router