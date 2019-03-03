<template>

<div class="page-header">
  <h1 class="title">Json Viewer</h1>
    <div class="discription">
      <span class="active">Json Viewer</span>       
    </div>
     {{MSG}}
</div>
</template>
<script>
import {myvar} from './Toolglobal.vue'

export default {  
   name:'json',
   data(){     
       return  {
                MSG:myvar
              } 
      }
};
</script>
<style>


</style>
