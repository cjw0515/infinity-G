<template>
  <div class="sidebar clearfix">
    <div id="documenter_sidebar">
      <div id="scrollholder" class="scrollholder">
        <div id="scroll" class="scroll">
          <ol id="documenter_nav" class="sidebar-panel nav">
            <li>
              <a class="current" href="#documenter-1">
                <i class="fa fa-home"></i> Home
              </a>
            </li>
            <li>
              <a href="#documenter-2">
                <i class="fa fa-code"></i> 밴드만들기
              </a>
            </li>
            <li>
              <a href="#documenter-3">
                <i class="fa fa-flask"></i> 밴드목록
              </a>
            </li>
            <li>
              <a href="#documenter-4">
                <i class="fa fa-th"></i> 게시판
              </a>
              <ol>
                <li>
                  <a href="#documenter-4-1">보통게시판</a>
                </li>
                <li>
                  <a href="#documenter-4-2">갤러리</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fa fa-th"></i> todolist
              </a>
              <ol>
                <li>
                  <router-link to="/todolists/TodoComponent1">이종화</router-link>
                </li>
                <li>
                  <router-link to="/todolists/TodoComponent2">김광일</router-link>
                </li>
                <li>
                  <router-link to="/todolists/TodoComponent3">임보라</router-link>
                </li>
                <li>
                  <router-link to="/todolists/TodoComponent4">최종원</router-link>
                </li>
                <li>
                  <router-link to="/todolists/TodoComponent5">xxx</router-link>
                </li>
              </ol>
            </li>
          </ol>
          <ul class="sidebar-panel nav">
            <li class="sidetitle">
              <span>More</span>
            </li>

            <li>
              <router-link to="/tools/scrum">
                <i class="fa fa-link"></i>
                Scrum Board
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
</style>
