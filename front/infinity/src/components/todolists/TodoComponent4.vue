<template>
  <div id="todoapp">
    {{user}}
    <Header></Header>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsData="todos" v-on:removeTodo="removeTodo"></TodoList>
    {{loading ? "loading...":""}}
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
import { utils } from "@/components/mixins/utils";

export default {
  mixins: [utils],
  data() {
    return {
      todos: [],
      user: "",
      loading: false
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
    },
    async getTodoList() {
      let apiUrl = LIST;
      this.loading = true;
      const response = await fetch(apiUrl);
      const json = await response.json();

      return json.todoList;
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
    this.getTodoList()
      .then(data => {
        this.todos = data;
        this.loading = false;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style scoped>
#todo {
  background-color: black;
}
</style>
