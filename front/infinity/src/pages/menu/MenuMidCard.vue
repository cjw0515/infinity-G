<template>     
  <!-- 서브메뉴 -->
  <div class="card child text-left">
    <div class="card-header">
      <h4 class="card-title">서브메뉴</h4>
    </div>
    <ul class="list-group list-group-flush" v-if="selectedMenu.menu.menuDepth == 2">
      <li class="list-group-item" @click="popupModal(`subMenuInsertModal`, `서브메뉴 삽입`)">
        <i class="btn-icon ti-plus"></i>
        <span style="color:#248afd">서브메뉴추가</span>
      </li>
      <li
        class="list-group-item"
        v-for="(subMenu, idx) in selectedMenu.menu.subMenu"
        :key="idx"
      >
        <div class="float-left">{{subMenu.subMenuName}}</div>
        <div class="float-right">
          <i class="btn-icon ti-trash" @click="handleDeleteRowData()"></i>
        </div>
      </li>
    </ul>
  </div>    
</template>

<script>
export default {
     
}
</script>
