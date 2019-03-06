<template>
    <div>
        <input type="text" v-model="todoText">
        <button v-on:click="addTodo">추가</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoText: ''
        }
    },
    methods: {
        addTodo(){
            //let text = this.todoText;
            this.$emit("addTodo", this.todoText);
            this.removeTxt();
        },
        removeTxt(){
            this.todoText = ''
        }
    }
}
</script>

<style>

</style>
