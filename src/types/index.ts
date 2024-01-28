//限制person对象属性
//暴露方式：默认、分别、统一
export interface PersonInter {
    id:string,
    name:string
    age:number
    //表示校验时可以没有
    score?:number
}