<template>
  <div class="container-widget">
    <div class="col-md-12">
      <div id="documenter_content" class="method-area-wrapper">
        <div id="documenter-1" class="method">
          <div class="method-area">
            <div class="pb-20">
              <h4 class="font-title">
                <b>Grid</b> Componet
              </h4>
              <p>설명</p>
            </div>
            <BoardCom></BoardCom>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Top Stats -->
    <div class="col-md-12">
      <div id="documenter_content" class="method-area-wrapper">
        <div id="documenter-1" class="method">
          <div class="method-area">
            <div class="pb-20">
              <h4 class="font-title">
                <b>Tree</b> Componet
              </h4>
              <p>설명</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Top Stats -->
    <div class="col-md-12">
      <div id="documenter_content" class="method-area-wrapper">
        <div id="documenter-1" class="method">
          <div class="method-area">
            <div class="pb-20">
              <h4 class="font-title">
                <b>SVG</b> Componet
              </h4>
              <p>설명</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Top Stats -->
    <div class="col-md-12">
      <div id="documenter_content" class="method-area-wrapper">
        <div id="documenter-1" class="method">
          <div class="method-area">
            <div class="pb-20">
              <h4 class="font-title">
                <b>Modal</b> Componet
              </h4>
              <p>설명</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoardCom from "./components/gridcomponent.vue";
import ModalCom from "./components/modalcomponent.vue";
import TreeCom from "./components/treeviewcomponent.vue";
import SvgCom from "./components/svgcomponent.vue";

export default {
  components: {
    BoardCom,
    ModalCom,
    TreeCom,
    SvgCom
  }
};
</script>
<style>
</style>
