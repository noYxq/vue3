import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//创建容器
const  app = createApp(App)
//使用router
app.use(router)


//挂在应用到app容器
app.mount('#app')

