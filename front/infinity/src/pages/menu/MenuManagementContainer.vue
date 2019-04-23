<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>메뉴 관리</h4>
      </div>
    </div>
    <!-- 상단메뉴 -->
    <div class="card-group">
      <div class="card child text-left">
        <div class="card-header">
          <h4 class="card-title">메뉴</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" @click="popupModal(`menuInsertModal`, `메뉴 삽입`)">
            <i class="btn-icon ti-plus"></i>
            <span style="color:#248afd">메뉴추가</span>
          </li>
          <li
            class="list-group-item"
            v-for="(menu, idx) in menus"
            :key="idx"
            @click="handleMenuClick(idx, 1)"
          >
            <div class="float-left">{{menu.menuName}}</div>
            <div class="float-right">
              <i class="btn-icon ti-trash" @click="handleDeleteRowData()"></i>              
            </div>
          </li>
        </ul>
      </div>
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
      <!-- 상세 -->
      <div class="card child text-left">
        <div class="card-header">
          <h4 class="card-title">{{selectedMenu.menu.menuName}}</h4>
        </div>
        <ul class="list-group list-group-flush" v-if="!isEmptyObject(selectedMenu.menu)">
          <li class="list-group-item">
            <div class="float-left">메뉴이름 : {{selectedMenu.menu.menuName}}</div>
            <div class="float-right">
              <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
            </div>
          </li>
          <li class="list-group-item">
            <div class="float-left">링크 : {{selectedMenu.menu.menuLink}}</div>
            <div class="float-right">
              <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
            </div>
          </li>
          <li class="list-group-item">
            <div class="float-left">
              아이콘 :
              <i v-bind:class="selectedMenu.menu.menuIcon"/>
            </div>
            <div class="float-right">
              <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
            </div>
          </li>
          <li class="list-group-item">
            <div class="float-left">depth : {{selectedMenu.menu.menuDepth}}</div>
            <div class="float-right">
              <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
            </div>
          </li>

          <li class="list-group-item">
            <div class="float-left">사용 : {{selectedMenu.menu.menuIsUsing}}</div>
            <div class="float-right">
              <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>    
</template>
<script>
export default {
    
}
</script>
