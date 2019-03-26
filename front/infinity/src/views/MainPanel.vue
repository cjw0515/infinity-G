<template>
  <div class="main-panel">
    <content-container></content-container>
    <bot-footer></bot-footer>
  </div>
</template>

<script>
import Content from "@/views/Content.vue";
import Footer from "@/views/Footer.vue";

export default {
  components: {
    "content-container": Content,
    "bot-footer": Footer
  }
};
</script>
