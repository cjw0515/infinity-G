<template >
   <div>
      <sandcoponent></sandcoponent>
      <p>{{ message }}</p>
      
      
       <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
   <button v-on:click="message='cccc'" >
      ffff
   </button>

      </div>      
</template>
<script>
import sandcoponent from '../components/sandComponent'

export default {   
   name:'sandbox',
   component:{
      sandcoponent
   },
   
   data (){
      return {
         message:'안녕',
         show:true
      }
   },
   comuted:{
      message(){
         return "나나나"
      }
   }
   
}
</script>
<style>.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>