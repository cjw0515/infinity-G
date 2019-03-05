<template>
    <div>
    
    <input type="text" v-model="Text" v-on:keyup.enter="addTodo()"
     style="width:200px; margin:2px" />
     <button v-on:click="addTodo()" >추가</button>

    </div>
</template>

<script>
export default {
    data:function(){
        return { Text:"" };
    },
  methods:{
       addTodo(){
          
          if(this.Text.trim().length < 3)
          {
              alert("3글자 이상 입력해야지!!");
              return;
          }
          
          let tex = this.Text.trim();
          this.$emit("addTodo",tex); 
          this.ClearText();
       } ,
       ClearText(){
           this.Text ="";
       }

  }   
}
</script>

<style>

</style>
