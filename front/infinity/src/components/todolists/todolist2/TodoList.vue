<template>
    <div>
        <h3>할일리스트</h3>
    <ul>
         <li v-for="(todo,index) in tododata" :key ="index">  {{todo}} 
           <button v-on:click="delTodo(index)" >삭제</button></li>
    </ul>
    </div>
</template>

<script>
export default {
    props:["tododata"],
    methods:{
        delTodo(no){
            if(confirm('지우게??'))
                this.$emit("delTodo",no); 
        }
    }
}
</script>

<style>

</style>
