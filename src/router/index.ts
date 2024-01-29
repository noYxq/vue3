//创建路由器，暴露出去
import {createRouter,createWebHistory,
createWebHashHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'


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
                    path:'detail/:id/:title/:content',//param只能单个参数不能传obj和数组
                    component:Detail,
                    //将路由收到的params参数作为props传给detail界面
                    // props:true 
                    //程序员自定义
                    props(route){
                        return route.params
                    }

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