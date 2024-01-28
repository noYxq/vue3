<template>
    <h3>姓名：{{person.name}}</h3>
    <h3>年纪：{{person.age}}</h3>
    <h3>薪水:{{person.job.ji.salary}}</h3><hr/>
    <button @click="showRawPerson">改变人</button>
    <h2>车信息</h2>
    <h3>车：{{car.name}}，车价格:{{car.price}}</h3>
    <button @click="addCar">改变车</button>
    <button @click="changePrice">改变价格</button>
</template>
<script lang="ts">
import { ref,toRef,toRefs,reactive,shallowReactive,
toRaw,markRaw} from "vue"
    export default{
        name:'Demo',
        setup() {
            let person = shallowReactive({
                name:'章三',
                age:18,
                job:{ji:{
                    salary:20
                }}
            })
            let car = ref({name:'大众',price:0})
            // const x = toRefs(person)
            // console.log('toRefs:',x)
            function showRawPerson(){
                const p = toRaw(person)
                p.age++
                console.log(p)
            }
            //tood 操作后
            function addCar(){
                 car.value.name="奔驰"
                 car.value.price=1.1
                 //todo 代码操作后无法改价格，理解指向新的对象
                 car = ref({name:'奔驰',price:1.1})
            }
            function changePrice(){
                car.value.price++
            
            }
            return {person,car,addCar,changePrice,showRawPerson,
            }
        }
    }
</script>