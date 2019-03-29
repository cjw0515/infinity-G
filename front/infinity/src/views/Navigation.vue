<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <menu-container></menu-container>
  </nav>
</template>

<script>
import MenuContainer from '@/components/menu/MenuContainer.vue'
export default {
  components:{
    'menu-container': MenuContainer
  }
};
</script>
