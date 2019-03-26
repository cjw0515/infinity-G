<template>
  <div class="container-fluid page-body-wrapper">
    <right-side-bar></right-side-bar>
    <navigation></navigation>
    <main-panel></main-panel>
  </div>
</template>

<script>
import Navigation from "@/views/Navigation.vue";
import RightSideBar from "@/views/RightSideBar.vue";
import MainPanel from "@/views/MainPanel.vue";
export default {
  components: {
    navigation: Navigation,
    "right-side-bar": RightSideBar,
    "main-panel": MainPanel
  }
};
</script>
