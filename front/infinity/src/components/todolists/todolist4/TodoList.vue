<template>
    <div>
        <ul>
            <li v-for="(todo, index) in propsData" :key="index">{{todo.todo}}
                <button v-on:click="deleteTodo(index)">삭제</button>
            </li>
        </ul>
    </div>    
</template>
<script>
export default {
    methods: {
        deleteTodo(idx){            
            this.$emit("removeTodo", idx)
        }
    },
    props: ["propsData"]
}
</script>
<style>

</style>
