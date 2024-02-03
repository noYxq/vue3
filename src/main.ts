import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//1、引入pinia
import {createPinia} from 'pinia';

//创建容器
const  app = createApp(App)
//2、创建pinia
const pinia = createPinia()
//3、安装pinia
app.use(pinia)
//挂在应用到app容器
app.mount('#app')

