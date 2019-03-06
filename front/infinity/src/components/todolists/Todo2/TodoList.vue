<template>
    <div>
        List
        <ul>
            <li v-for="(item, index) in todoslist" :key="index" >
                {{item}}
                <button @click="todDel(index)" >삭제</button> </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['todoslist'],
      data:function() {
        return {
         tododatas:""
      }
      },
       methods:{
        todDel :function(no)
        {
           
          alert("삭제"+no);
        },
        todoMod :function()
        {
          alert("수정");
        }
    }
    
}
</script>

<style>

</style>
