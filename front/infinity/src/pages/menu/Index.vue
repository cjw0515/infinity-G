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
          >{{menu.menuName}}</li>
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
          >{{subMenu.subMenuName}}</li>
        </ul>
      </div>
      <!-- 상세 -->
      <div class="card child text-left">
        <div class="card-header">
          <h4 class="card-title">Card title</h4>
        </div>
        <ul class="list-group list-group-flush" v-if="!isEmptyObject(selectedMenu.menu)" >
          <li class="list-group-item">메뉴이름 : {{selectedMenu.menu.menuName}}</li>
          <li class="list-group-item">링크 : {{selectedMenu.menu.menuLink}}</li>
          <li class="list-group-item">
            <i v-bind:class="selectedMenu.menu.menuIcon"/>
          </li>
          <li class="list-group-item">depth : {{selectedMenu.menu.menuDepth}}</li>
          <li class="list-group-item">사용 : {{selectedMenu.menu.menuIsUsing}}</li>
        </ul>
      </div>
    </div>
    <modal-form :modal-options="modalOptions">
      <div slot="modalBody">
        <menu-insert-form :insert-form-props="insertFormProps" :max-menu-number="menus.length" :key="componentKey" v-if="modalOptions.modalId == `menuInsertModal`"></menu-insert-form>        
        <submenu-insert-form :insert-form-props="insertFormProps" :max-menu-number="menus.length" :key="componentKey" v-if="modalOptions.modalId == `subMenuInsertModal`"></submenu-insert-form>        
      </div>
      <div slot="modalFooter"></div>
    </modal-form>
    <!-- <table-paging :paging-table-options="pagingTableOptions">
      <table-row
        slot="row"
        slot-scope="props"
        :row-data="props.rowData"
        :onClickDelete="props.onClickDelete"
        :onClickModify="props.onClickModify"
      ></table-row>
    </table-paging>
    <modal-form :modal-options="modalOptions">
      <validation-form slot="modalBody" :validation-form-options="validationFormOptions"></validation-form>
      <div slot="modalFooter"></div>
    </modal-form>-->
  </div>
</template>
<script>
import { utils } from "@/components/mixins/utils";
import { LIST, MENU } from "@/api/menus/";
import Modal from "@/components/modal/Modal.vue";
import MenuInsertForm from "./MenuInsertForm.vue";
import SubMenuInsertForm from "./SubMenuInsertForm.vue";


export default {
  mixins: [utils],
  data() {
    return {
      menus: [],
      selectedMenu: {
        idx: 0,
        depth: 1,
        menu: {}
      },      
      modalOptions: {
        modalName: "",
        modalId: ""
      },
      insertFormProps:{
        handleInsertMenu: this.insertMenu
      },
      componentKey: 0
    };
  },
  methods: {
    async getMenuList() {
      let apiUrl = LIST;
      const response = await fetch(apiUrl);
      const json = await response.json();
      return json.menus;
    },    
    async insertMenu(formData){   
      let apiUrl = MENU;   
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const resultJson = await response.json();
      
      if(resultJson.result == "ok"){
        Swal.fire('메뉴가 추가되었습니다.')
      }else{
        Swal.fire('오류가 발생했습니다.')
      }
    },    
    popupModal(modalId, modalName){
      let _this = this;
      new Promise(function(resolve, reject){
        _this.componentKey = new Date().getSeconds()
        _this.modalOptions.modalName = modalName
        _this.modalOptions.modalId = modalId
        resolve()
      }).then(function(){
        $(`#${modalId}`).modal("show");      
      })
    },
    delRowData() {
      Swal.fire({
        title: "정말 삭제하시겠습니까?",
        text: "한번 삭제하면 되돌릴 수 없습니다.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        showLoaderOnConfirm: true,
        preConfirm: login => {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve({
                result: true
              });
            }, 2000);
          });
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then(result => {
        if (result.value) {
          // Swal.enableLoading();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    handleModify() {
      alert();
    },
    handleMenuClick(idx, depth) {
      this.selectedMenu.idx = idx;
      this.selectedMenu.depth = depth;
      this.selectedMenu.menu = this.menus[idx];
    }
  },
  components: {
    "modal-form": Modal,
    "menu-insert-form": MenuInsertForm,
    "submenu-insert-form": SubMenuInsertForm
  },
  mounted: function() {       
    this.getMenuList()
      .then(data => {
        this.menus = data;        
      })
      .catch(error => {
        console.error(error);
      });
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
