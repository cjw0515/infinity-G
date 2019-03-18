<template>
    <div>
        
        <input type="text" ref="t"  v-model="Title" placeholder="제목">
        <input type="text" ref="to" placeholder="할일" v-model="TODO" >
        <select v-model="SEL">
            <option disabled value="">중요도</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <button class="btn" @click="RegAction()">등록</button>
    </div>
</template>

<script>
import eventBus from '../../../EventBus.js';
var _this=this;

export default {
   data() {
       return {
           Title:"",
           TODO:"",
           SEL:""
       }
   },
   methods: {
       RegAction(){
           if(this.Title.trim().length==0){
               alert("제목을 입력해주세요");
               this.$refs.t.focus();
               return;
           }
           if(this.TODO.trim().length==0){
               alert("할일을 입력해주세요");
               this.$refs.to.focus();
               return;
           }

            if(this.SEL.trim().length==0){
               alert("중요도를 선택해주세요");
               return;
           }  
          let tododata= {titledata:this.Title,todoval:this.TODO,pri:this.SEL,fix:false};          
          this.$emit("addTodo",tododata);            
          this.ClearValue();
       },
       ClearValue(){
           this.Title="";
           this.TODO="";
           this.SEL="";
       }
   },
}
</script>

<style>

</style>
