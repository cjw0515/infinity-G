<template>
<div class="container">
 <h1>Todo</h1>
 <h2>할일</h2>
 <div class="input-group" style="margin-bottom:10px"> 
     <input type="text" class="form-control" placeholder="할일을 입력하세요" v-model="name" v-on:keyup.enter="createTodo(name)" >
     <span class="input-group-btn">
           <button class="btn btn-default" type="button" @click="createTodo(name)" >추가</button>
     </span>
  </div>
 <ul class="list-group">
    <li class="list-group-item" :key="index" v-for="(item, index) in todos" >        
        {{item.name}}
        <span class="input-group-btn pull-center" style="font-size:12px; line-height:1;">
           <button class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button">
               더보기
           <span class="caret"></span>
           </button>
           <ul class="dropdwon-menu">
               <li><a  href=# @click="deleteTodo(index)">삭제</a></li>
           </ul>
        </span>
    </li>
</ul>
</div>
</template>
<script>
export default {
  name:'TodoPage',
   data(){     
       return  {
               todos : [{ name:'청소' },{ name:'블로그쓰기' },{ name:'밥먹기' },{ name:'안녕' }]
              } 
      }  ,
      mounted(){
          console.log('Component mounted')
      } ,
      methods:{
          createTodo(name){
                if(name !=null)
                {
                    this.todos.push({name:name});
                    this.name=null;
                }
          },
          deleteTodo(i){
              this.todos.splice(0,1);
          }
      }
  }   

</script>
<style    >

</style>
