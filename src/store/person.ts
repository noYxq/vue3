import {defineStore} from 'pinia';
import axios from 'axios';
import {nanoid} from 'nanoid';

//名字别用defineStore
export const usePersonStore = defineStore('person',{
    actions:{
        async get(){
                //     //发请求,连续结构赋值+重命名
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        // 响应包装为对象
        let obj = {id:nanoid(),title}
        console.log(obj)
        this.talkList.unshift(obj)
        }
    },
    //真正存储数据的地方
    state(){
        return {
            talkList:[{id:"1",title:"标题"}]
        }
    }
})