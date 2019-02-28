<template>

    <div class="page-header">
 

  <h1 class="title">Code Editor</h1>
    <div class="discription">
      <span class="active">Code Editor</span>
      <div class="con-my-app">
        <vuenut    :store="$store.state"/> 
      </div> 

  </div>



</div>
</template>
     
 
<script>
 import Vue from 'vue'

export default {
 
mounted(){
  Vue.loadScript("../../../public/js/jstinker/beautify-web/beautify-html.js");
   Vue.loadScript("../../../public/js/jstinker/beautify-web/beautify-css.js");
   Vue.loadScript("../../../public/js/jstinker/beautify-web/beautify.js");
   Vue.loadScript("../../../public/js/jstinker/ace/ace.js");
   Vue.loadScript("../../../public/js/jstinker/ace/ext-language_tools.js");
   Vue.loadScript("https://togetherjs.com/togetherjs-min.js");

Vue.loadScript("../../../public/js/jstinker/jstinker.js");

Vue.loadScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js");

}
  
};
</script>
<style lang="css">
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css';
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css';
@import '../../../public/css/jstinker/jstinker.css';
 
</style>
