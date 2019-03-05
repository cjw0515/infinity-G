<template>
    <div style="background-color: #74992e;">
        내용3
        <b>{{message}}</b> <br/>
        <b>{{todo.no}}</b> <br/>
        <b>{{todo.name}}</b><br/>
        {{todo.address}}
    </div>
</template>

<script>
export default {
   props:{
       todo:{
           type:Object,
           default:function () {
               return {no:0,name:'',address:''}
           }
       }
   },
   computed: {
       message:function (msg) {
           if(this.todo.no==1)
            return '받았네';
          
          return '받기전';
       }
   }
}
</script>

<style>

</style>
