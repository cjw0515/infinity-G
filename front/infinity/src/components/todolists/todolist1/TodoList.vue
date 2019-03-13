<template>
    <div>
        <ul>
            <li v-for="(todo,index) in todos" :key="index">
                {{todo.todo}}
                <button @click="deleteTodo(index)">삭제</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props : ["todos"],
    methods : {
        deleteTodo() {
            this.$emit("removeTodo",index)
        }
    }
}
</script>

<style>

</style>

