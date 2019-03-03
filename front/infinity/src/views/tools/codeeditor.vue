<template>
<div class="page-header">
  <h1 class="title">Code Editor</h1>
    <div class="discription">
      <span class="active">Code Editor</span> 
     </div>  
      

     <div class="con-my-app">
        <vuenut    :store="$store.state"/> 
      </div> 
</div>
</template>

<script>
 

export default {
  name: "app" 
};
</script>

<style>
.my-editor {
  max-height: 378px;
}
</style>
