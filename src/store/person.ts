import {defineStore} from 'pinia';

//名字别用defineStore
export const usePersonStore = defineStore('person',{
    //真正存储数据的地方
    state(){
        return {
            talkList:[{id:"1",title:"标题"}]
        }
    }
})