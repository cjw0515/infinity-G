<template>
  <div>
     <h1>할일 업그레이드</h1>
      <TodoHeader></TodoHeader>
      <TodoInput  v-on:addTodo="addTodo"></TodoInput>      
      <TodoList v-bind:tododata="todos" v-on:delTodo="delTodo" ></TodoList>
      
      <TodoContact ></TodoContact>
      <component :is="currentView" :todo="todo" ></component>
      <TodoFooter></TodoFooter>
      {{Showmsg}}
      <button @click="action_list()" >show</button>
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
import Contants from '../../config/constans.js';
import constans from '../../config/constans.js';


export default {
    name:"Todo",
    components:{
      TodoContact,TodoHeader,TodoFooter,TodoInput,TodoList,
      Contac1,Contac2,Contac3,ContainerMain
    },
    mounted:function(){
        this.Call_TodoList();

      eventBus.$on("CallContainer", (no) => {
          this.currentView = null;
            this.Call_TodoList();
          //this.fetchCompo(no); 
      });
    },
    data(){
      return {
        todo:{no:0,name:'',address:''},        
        todos :
        []  ,
        currentView:null,
        Showmsg :Contants.HELLO
      }
    },
    methods:{
        addTodo(text){
          //alert("부모:"+text);
          //this.todos.push(text);
            this.Add_Todo(text);
        },
        delTodo(idx){     
          console.log(idx);
            this.DellTodo(idx);
        },
        clearTodos(){
          this.todos.splice(0,this.todos.length);
        },
        fetchCompo:function(no){
          switch(no)
          {
            case 0:
            this.currentView=ContainerMain;
            break;
            case 1:            
            this.currentView=Contac1;
            break;
            case 2:
            this.currentView=Contac2;
            break;
            case 3:
            this.currentView=Contac3;
            break;
          }
        },
        async Add_Todo(msg){
            let apiUrl=Contants.TODO_ADD;  
            const response = await fetch(apiUrl,{method:'post',
            headers: new Headers({
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
              }),
              body:JSON.stringify({
                title:msg,
                user:"ccc",
                id:"daniel",
                desc:"설명" 
              })
            });
            const rtdata= await response.text();
            console.log(rtdata); 
            await this.Call_TodoList();
        },
        async  Call_TodoList(){
           let apiUrl=Contants.TODO_LIST;
           const response = await fetch(Contants.TODO_LIST);
           const  json =await response.json();  
           console.log(json);
           this.clearTodos(); 
           this.Bind_TodoList(json);  
        },
        Bind_TodoList(tododata){
            let datatod =[];
              $.each(tododata, function (i, member) {
              for (var i in member) {
                datatod.push({
                    Title: member[i].title,
                    Uid:member[i].uid
                });
              }
            });
            this.todos=datatod;
        },
        async DellTodo(key){
            let apiUrl=Contants.TODO_DELETE+"?uid="+key;
            const response = await fetch(apiUrl,{method:'delete',
            headers: new Headers({
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
              })
            });
           await this.Call_TodoList();;
        } 

         
    }

  
};
</script>

<style>
</style>
