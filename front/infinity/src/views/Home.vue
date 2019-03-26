<template>
  <div class="container-scroller">
    <top-header></top-header>
    <container></container>
  </div>
</template>
<script>
import Header from "@/views/Header.vue";
import Container from "@/views/Container.vue";

export default {
  components: {
    "top-header": Header,
    container: Container
  }
};
</script>
