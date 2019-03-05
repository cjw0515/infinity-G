<template>
  <div>
     <h1>할일 업그레이드</h1>
      <TodoHeader></TodoHeader>
      <TodoInput  v-on:addTodo="addTodo"></TodoInput>      
      <TodoList v-bind:tododata="todos" v-on:delTodo="delTodo" ></TodoList>
      
      <TodoContact ></TodoContact>
      <component :is="currentView" :todo="todo" ></component>
      <TodoFooter></TodoFooter>
  </div>
</template>
<script>
import TodoContact  from './todolist2/TodoContact.vue';
import TodoHeader  from './todolist2/TodoHeader.vue';
import TodoFooter  from './todolist2/TodoFooter.vue';
import TodoInput  from './todolist2/TodoInput.vue';
import TodoList  from './todolist2/TodoList.vue';
import Contac1  from './todolist2/Contac1.vue';
import Contac2  from './todolist2/Contac2.vue';
import Contac3  from './todolist2/Contac3.vue';
import ContainerMain  from './todolist2/ContainerMain.vue';
import eventBus from '../../EventBus.js';

export default {
    name:"Todo",
    components:{
      TodoContact,TodoHeader,TodoFooter,TodoInput,TodoList,
      Contac1,Contac2,Contac3,ContainerMain
    },
    mounted:function(){
      this.fetchCompo(0);
      eventBus.$on("CallContainer", (no) => {
          this.currentView = null;
          this.fetchCompo(no);          
          
      });
    },

    data(){
      return {
        todo:{no:0,name:'',address:''},        
        todos :["아예","우예","저예"],
        currentView:null
      }
    },
    methods:{
        addTodo(text){
          //alert("부모:"+text);
          this.todos.push(text);
        },
        delTodo(idx){     
            
            this.todos.splice(idx,1);
        },
        
        fetchCompo:function(no){
          switch(no)
          {
            case 0:
            this.currentView=ContainerMain;
            break;
            case 1:
            this.todo={no:1,name:'이름',address:'주소'};
            this.currentView=Contac1;
            break;
            case 2:
            this.currentView=Contac2;
            break;
            case 3:
            this.currentView=Contac3;
            break;
          }
        }
    }

  
};
</script>

<style>
</style>
