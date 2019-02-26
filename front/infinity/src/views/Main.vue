<template>
  <div>
    <Header></Header>
    <Navigation></Navigation>
    <Content></Content>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Navigation from "./Navigation.vue";
import Content from "./Content.vue";

export default {
  components: {
    Header,
    Navigation,
    Content
  }
};
</script>
<style>
</style>
