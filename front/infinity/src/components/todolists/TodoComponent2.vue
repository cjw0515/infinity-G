<template>
  <div>김광일
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
  <TodoList  :todoslist ="todos"></TodoList>
  test
  
  <TodoFooter></TodoFooter>
</div>

</template>

<script>
import TodoHeader from './Todo2/TodoHeader.vue';
import TodoInput from './Todo2/TodoInput.vue';
import TodoList from './Todo2/TodoList.vue';
import TodoFooter from './Todo2/TodoFooter.vue';


export default {
    components:{
      TodoHeader,TodoInput,TodoList,TodoFooter
    },
    data:function() {
      return {
        todos :["손씻기","말리기","닦기"]
      }
    },
    methods:{
        todoAdd :function()
        {
          alert("추가");
        },
        todoDel :function(no)
        {
          alert("삭제2"+no);
        }
    }


};
</script>

<style>
</style>
