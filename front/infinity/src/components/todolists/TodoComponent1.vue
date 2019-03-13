<template>
  <div>
    <app-header></app-header>
    <todo-input :addTodo="addTodo"></todo-input>
    <todo-list :todos="todos" :removeTodo="removeTodo"></todo-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './todolist1/AppHeader.vue'
import AppFooter from './todolist1/AppFooter.vue'
import TodoInput from './todolist1/TodoInput.vue'
import TodoList from './todolist1/TodoList.vue'

export default {
    data() {
        return {
            todos : []
        }
    },
    components : {
        'app-header' : AppHeader,
        'app-footer' : AppFooter,
        'todo-input' : TodoInput,
        'todo-list' : TodoList
    },
    methods : {
        addTodo(text) {
            this.todos.push(text);
        },
        removeTodo(index) {
            this.todos.splice(index,1);
        }
    },
    mounted() {
        async function fetch_api(){
        let apiUrl = process.env.VUE_APP_ENV == "development" ? 
        'http://localhost:5001/infinity-g-cd058/us-central1/v1/todolist' : 'https://us-central1-demoapp-1779c.cloudfunctions.net/v1/todolist'
        // console.log(apiUrl)  
        const response = await fetch(apiUrl)
        const json = await response.json();    
        // this.todos = json.todoList;
            return json.todoList;
        }
            this.todos = fetch_api().then(data => {
            this.todos = data       
        }).catch(error => {
            console.error(error);
        });
    }
};
</script>

<style>
</style>
