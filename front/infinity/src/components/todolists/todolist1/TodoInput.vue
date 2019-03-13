<template>
    <div>
        <input type="text" v-model="todoText" @keyup.enter="addTodo"/>
        <button @click="addTodo">입력</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoText : "",
        }
    },
    methods : {
        addTodo() {
            let text = this.todoText;
            this.removeText();
            this.$emit("addTodo", text);
        },
        removeText() {
            this.todoText = "";
        }
    }
}
</script>

<style>

</style>
