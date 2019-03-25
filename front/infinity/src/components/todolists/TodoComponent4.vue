<template>
  <div>
    {{user}}
    <Header></Header>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsData="todos" v-on:removeTodo="removeTodo"></TodoList>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./todolist4/Header.vue";
import TodoInput from "./todolist4/TodoInput.vue";
import Footer from "./todolist4/Footer.vue";
import TodoList from "./todolist4/TodoList.vue";
import authChk from "@/auth/";
import { LIST } from "@/api/todolist/";

export default {
  data() {
    return {
      todos: [],
      user: ""
    };
  },
  methods: {
    //삽입
    addTodo(text) {
      this.todos.push(text);
    },
    //제거
    removeTodo(idx) {
      this.todos.splice(idx, 1);
    }
  },
  components: {
    Header,
    TodoInput,
    Footer,
    TodoList
  },
  mounted: function() {
    this.user = authChk.getUser().name;
    async function fetch_api() {
      let apiUrl = LIST;
      const response = await fetch(apiUrl);
      const json = await response.json();
      return json.todoList;
    }
    this.todos = fetch_api()
      .then(data => {
        this.todos = data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style>
</style>
