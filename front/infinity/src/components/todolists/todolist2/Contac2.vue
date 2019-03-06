<template>
    <div style="background-color:rgb(255, 255, 128);">
        내용2
        {{message}} <br/>
        {{todo.no}} <br/>
        {{todo.name}}<br/>
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
