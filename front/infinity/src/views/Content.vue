<template>
  <div class="content-wrapper">
    <router-view :key="$route.path"></router-view>
    <!-- <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="row">
          <div class="col-12 col-xl-5 mb-4 mb-xl-0">
            <h4 class="font-weight-bold">Hi, Welcomeback!</h4>
            <h4 class="font-weight-normal mb-0">JustDo Dashboard,</h4>
          </div>
          <div class="col-12 col-xl-7">
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <div class="border-right pr-4 mb-3 mb-xl-0">
                <p class="text-muted">Balance</p>
                <h4 class="mb-0 font-weight-bold">$40079.60 M</h4>
              </div>
              <div class="border-right pr-4 mb-3 mb-xl-0">
                <p class="text-muted">Today’s profit</p>
                <h4 class="mb-0 font-weight-bold">$175.00 M</h4>
              </div>
              <div class="border-right pr-4 mb-3 mb-xl-0">
                <p class="text-muted">Purchases</p>
                <h4 class="mb-0 font-weight-bold">4006</h4>
              </div>
              <div class="pr-3 mb-3 mb-xl-0">
                <p class="text-muted">Downloads</p>
                <h4 class="mb-0 font-weight-bold">4006</h4>
              </div>
              <div class="mb-3 mb-xl-0">
                <button class="btn btn-warning rounded-0 text-white">Downloads</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: ""
    };
  }
};
</script>
<style scoped>
.content-wrapper {
  background-color: gray;
}
</style>

