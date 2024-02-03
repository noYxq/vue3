import {defineStore} from 'pinia';

//名字别用defineStore
export const useCountStore = defineStore('count',{
    //真正存储数据的地方
    state(){
        return {
            sum:6
        }
    }
})