<template>
    <h1>{{sum}}</h1>
    <button @click="sum++">++</button>
</template>
<script>
import { ref,onBeforeMount,onMounted,onBeforeUpdate,
 onUpdated,onBeforeUnmount,onUnmounted} from "vue";
export default{
    name:'demo',
    setup() {
        console.log('---setup---')
        let sum = ref(0)
        //DOM即将挂载（启动时在setup后出现）
		onBeforeMount(()=>{
			console.log('---onBeforeMount---')
		})
        //DOM挂载结束（启动在onBeforeMount后出现）
		onMounted(()=>{
			console.log('---onMounted---')
		})
        //DOM即将更新（更新时会出现）
		onBeforeUpdate(()=>{
			console.log('---onBeforeUpdate---')
		})
        //DOM更新结束
		onUpdated(()=>{
			console.log('---onUpdated---')
		})
        //即将销毁
		onBeforeUnmount(()=>{
			console.log('---onBeforeUnmount---')
		})
        //销毁结束
		onUnmounted(()=>{
			console.log('---onUnmounted---')
		})
     return  {sum}
    }

}

</script>
