<template>
   <dev class="person">
    <h1>{person.id}</h1><br/>
    <h1>{person.name}</h1><br/>
    <h1>{person.age}</h1><br/>
   </dev>
</template>
<script lang="ts" setup name="Person">
import {type PersonInter} from '@/types'
    let person:PersonInter = {id:'3232',name:'章三',age:12,score:1}
    let personList:Array<PersonInter> = [
        {id:'1',name:'章三',age:12,score:1},
        {id:'2',name:'lisi',age:12,score:2},
        {id:'3',name:'wangwu',age:12,score:3}
    ]
</script>
<style scoped>
    
</style>