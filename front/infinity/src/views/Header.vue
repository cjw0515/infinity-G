<template>
  <div id="top" class="clearfix">
    <!-- Start App Logo -->
    <div class="applogo">
      <a href="/" class="logo">
        Infinity
        <span>Band</span>
      </a>
    </div>
    <!-- End App Logo -->
    <!-- Start Sidebar Show Hide Button -->
    <a href="javascript:void(0);" class="sidebar-open-button">
      <i class="fa fa-bars"></i>
    </a>
    <a href="javascript:void(0);" class="sidebar-open-button-mobile">
      <i class="fa fa-bars"></i>
    </a>
    <!-- End Sidebar Show Hide Button -->
    <!-- Start Searchbox -->
    <form class="searchform">
      <input type="text" class="searchbox" id="searchbox" placeholder="Search">
      <span class="searchbutton">
        <i class="fa fa-search"></i>
      </span>
    </form>
    <!-- End Searchbox -->
    <!-- Start Top Menu -->
    <ul class="topmenu">
      <li>
        <a href="javascript:void(0);">젠킨스</a>
      </li>
      <li>
        <a href="javascript:void(0);">파이어베이스</a>
      </li>
      <li>
        <a href="javascript:void(0);">회원가입</a>
      </li>
      <li>
        <router-link :to="{name: 'login'}">로그인</router-link>
      </li>
      <li class="dropdown">
        <a href="javascript:void(0);" data-toggle="dropdown" class="dropdown-toggle">
          알림
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li>
            <a href="javascript:void(0);">알림1</a>
          </li>
          <li>
            <a href="javascript:void(0);">알림2</a>
          </li>
          <li>
            <a href="javascript:void(0);">로그아웃</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style>
</style>
