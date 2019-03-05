<template>
  <div>
    <Header></Header>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsData="todos" v-on:removeTodo="removeTodo"></TodoList>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './todolist4/Header.vue'
import TodoInput from './todolist4/TodoInput.vue'
import Footer from './todolist4/Footer.vue'
import TodoList from './todolist4/TodoList.vue'

export default {
  data(){
    return{
      todos: ["씻기","밥먹기","일하기"]
    }
  }
  ,
  methods:{
    //삽입
    addTodo(text){
      this.todos.push(text)
    },
    //제거
    removeTodo(idx){  
      this.todos.splice(idx, 1)
    }
  },
  components: {
    Header,
    TodoInput,
    Footer,
    TodoList
  }
};
</script>

<style>
</style>
