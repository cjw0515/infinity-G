<template>
  <div>
    <input type="text" v-model="todoText" v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo">추가</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    addTodo() {
      let text = this.todoText;
      this.removeTxt();
      this.$emit("addTodo", text);
    },
    removeTxt() {
      this.todoText = "";
    }
  }
};
</script>
<style>
</style>
