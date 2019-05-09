<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>메뉴 관리</h4>
      </div>
    </div>
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
              <i class="btn-icon ti-trash" @click.stop="handleDeleteRowdata(menu.id, 1)"></i>
              <i class="ti-angle-right" v-if="menu.id == selectedMenu.menu.id"></i>
            </div>
          </li>
        </ul>
      </div>

      <div class="card child text-left">
        <div class="card-header">
          <h4 class="card-title">서브메뉴</h4>
        </div>
        <ul
          class="list-group list-group-flush"
          v-if="selectedMenu.depth == 2 || selectedMenu.menu.menuDepth == 2"
        >
          <li class="list-group-item" @click="popupModal(`subMenuInsertModal`, `서브메뉴 삽입`)">
            <i class="btn-icon ti-plus"></i>
            <span style="color:#248afd">서브메뉴추가</span>
          </li>
          <li
            class="list-group-item"
            v-for="(subMenu, idx) in subMenus"
            :key="idx"
            @click="handleMenuClick(idx, 2)"
          >
            <div class="float-left">{{subMenu.subMenuName}}</div>
            <div class="float-right">
              <i class="btn-icon ti-trash" @click.stop="handleDeleteRowdata(subMenu.id, 2)"></i>
              <i class="ti-angle-right" v-if="subMenu.id == selectedSubMenu.subMenu.id"></i>
            </div>
          </li>
        </ul>
      </div>

      <div class="card child text-left">
        <div class="card-header">
          <div class="float-left">
            <h4 class="card-title">{{menuPath}}</h4>
          </div>
        </div>
        <ul
          class="list-group list-group-flush"
          v-if="!isEmptyObject(selectedMenu.menu) && selectedMenu.depth == 1"
        >
          <li class="list-group-item" @click="handleClickModify()">
            <i class="btn-icon ti-settings"></i>
            <span style="color:#248afd">수정</span>
          </li>
          <li class="list-group-item" v-for="(value, key) in selectedMenu.menu" :key="key">
            <div class="float-left">{{key}} : {{value}}</div>
          </li>
          <!-- 
          <li class="list-group-item">
            <div class="float-left">메뉴이름 : {{selectedMenu.menu.menuName}}</div>
          </li>
          <li class="list-group-item">
            <div class="float-left">메뉴이름 : {{selectedMenu.menu.menuName}}</div>
          </li>
          <li class="list-group-item">
            <div class="float-left">링크 : {{selectedMenu.menu.menuLink}}</div>
          </li>
          <li class="list-group-item">
            <div class="float-left">
              아이콘 :
              <i v-bind:class="selectedMenu.menu.menuIcon"/>
            </div>
          </li>
          <li class="list-group-item">
            <div class="float-left">사용 : {{selectedMenu.menu.menuIsUsing}}</div>
          </li>
          -->
        </ul>
        <ul class="list-group list-group-flush" v-else-if="!isEmptyObject(selectedSubMenu.subMenu)">
          <li class="list-group-item" @click="handleClickModify()">
            <i class="btn-icon ti-settings"></i>
            <span style="color:#248afd">수정</span>
          </li>
          <li class="list-group-item">
            <div class="float-left">메뉴이름 : {{selectedSubMenu.subMenu.subMenuName}}</div>
          </li>
          <li class="list-group-item">
            <div class="float-left">링크 : {{selectedSubMenu.subMenu.subMenuLink}}</div>
          </li>
          <li class="list-group-item">
            <div class="float-left">사용 : {{selectedSubMenu.subMenu.subMenuIsUsing}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { utils } from "@/components/mixins/utils";

export default {
  mixins: [utils],
  props: {
    selectedMenu: {
      type: Object,
      default: () => ({
        menu: {}
      })
    },
    selectedSubMenu: {
      type: Object,
      default: () => ({
        subMenu: {}
      })
    },
    menus: {
      type: Array,
      default: []
    },
    popupModal: {
      type: Function,
      default: () => {
        alert("default");
      }
    },
    handleMenuClick: {
      type: Function,
      default: () => {
        alert("default");
      }
    },
    handleDeleteRowdata: {
      type: Function,
      default: () => {
        alert("default delete");
      }
    },
    subMenus: {
      type: Array,
      default: []
    },
    handleModify: {
      type: Function,
      default: () => {
        alert("default modify");
      }
    }
  },
  data() {
    return {
      depth1FormData: [
        "menuName",
        "menuLink",
        "menuIcon",
        "menuIsUsing",
        "menuOrder"
      ],
      depth2FormData: [],
      depth1ColData:{
        menuName: "name",
        menuIcon: "icon",
        menuOrder: "order"
      },
      depth2ColData:{
        menuName: "name",
        menuIcon: "icon",
        menuOrder: "order"
      }
    };
  },
  methods: {
    handleClickModify: function() {
      console.log(this.selectedMenu.menu);
      this.handleModify();
    },
    getSelectedData: (targetObj, selectedData)=>{
      let colArr = [];      

      for (let iKey in targetObj) {
        for(let jKey in selectedData){
          if(iKey == jKey){
            colArr.push({
              [selectedData[jKey]]: targetObj[iKey]
            });
          }
        }          
      }

      console.log(colArr);  
      return colArr;  
    }
  },
  mounted: function() {         
    console.log(this.selectedColData)
  },
  computed: {
    menuPath: function() {
      let selectedMenu = this.selectedMenu.menu;
      let selectedSubMenu = this.selectedSubMenu.subMenu;
      let path = selectedMenu.menuName ? selectedMenu.menuName : "";

      path += selectedSubMenu.subMenuName
        ? `/${selectedSubMenu.subMenuName}`
        : ``;
      return path;
    },
    selectedColData: function(){
      console.log(this.getSelectedData(this.menus[0], this.depth1ColData))
    }    
  },
  menuData: function() {
    let data = [];   

    return data;
  }
};
</script>
<style scoped>
.list-group-item {
  cursor: pointer;
}
.list-group-item:hover {
  background-color: lightgray;
}
.card.child {
  overflow-y: auto;
  height: 400px;
}
.list-group {
  background-color: white;
}
.btn-icon {
  display: inline-block;
  font-size: 15px;
  width: 40px;
  color: #248afd;
  cursor: pointer;
}
</style>