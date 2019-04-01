<template>
  <div class="swal-overlay swal-overlay--show-modal" tabindex="-1">
    <div class="swal-modal" role="dialog" aria-modal="true">
      <div class="swal-title" style>{{title1}}</div>
      <div class="swal-text" style>{{content1}}</div>
      <div class="swal-footer">
        <div class="swal-button-container">
          <button class="swal-button swal-button--confirm btn btn-primary" @click="GetCount()">OK</button>

          <div class="swal-button__loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "제목",
      message: "내용"
    };
  },
  props: ["title1", "content1", "timer"],
  methods: {
    GetCount() {
      alert(this.timer);
    }
  }
};
</script>

<style>
</style>
