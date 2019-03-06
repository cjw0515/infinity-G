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
      todos: []
    }
  },
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
  },
  mounted: function(){
    async function fetch_api(){
      let apiUrl = process.env.VUE_APP_ENV == "development" ? 
      'http://localhost:5001/infinity-g-cd058/us-central1/v1/todolist' 
      : 'https://us-central1-demoapp-1779c.cloudfunctions.net/v1/todolist'
      // console.log(apiUrl)  
      const response = await fetch(apiUrl)
      const json = await response.json();    
      // this.todos = json.todoList;
      return json.todoList;
    }
    this.todos = fetch_api().then(data => {
      this.todos = data       
    }).catch(error => {
      console.error(error)
    });    
  }
};
</script>

<style>
</style>
