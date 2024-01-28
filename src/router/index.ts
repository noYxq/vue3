//创建路由器，暴露出去
import {createRouter,createWebHistory,
createWebHashHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detial from '@/pages/Detail.vue'


//创建路由器
const  router = createRouter({
    //hash模式和history模式
    //createWebHashHistory
    history:createWebHistory(),
        routes:[{
            name: 'zhuye',
            path:'/home',
            component:Home
        },
        {   
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
                    //子级不需要斜杠
                    name:'detail',
                    path:'detail',
                    component:Detial
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
    
    
    ]
    })
    //暴露router
    export default router