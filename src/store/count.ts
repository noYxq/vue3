import {defineStore} from 'pinia';

//名字别用defineStore
export const useCountStore = defineStore('count',{
    actions:{
        increment(val:any){
            //this 是useCountStore
            if(this.sum <10){
                this.sum += val
            }
        }
    },
    //真正存储数据的地方
    state(){
        return {
            sum:6,
            language:'计算'
        }
    }
})