<template>
  <div>
    <menu-management-container
      :menus="menus"
      :sub-menus="subMenus"
      :selected-menu="selectedMenu"
      :popup-modal="popupModal"
      :handle-menu-click="handleMenuClick"
      :handle-delete-rowdata="handleDeleteRowdata"
    >      
    </menu-management-container>
    <modal-form :modal-options="modalOptions">
      <div slot="modalBody">
        <menu-insert-form
          :insert-form-props="insertFormProps"
          :max-menu-number="menus.length"
          :key="componentKey"
          v-if="modalOptions.modalId == `menuInsertModal`"
        ></menu-insert-form>
        <submenu-insert-form
          :insert-form-props="insertFormProps"
          :key="componentKey"
          :parent-menu-link="selectedMenu.menu.menuLink"
          v-if="modalOptions.modalId == `subMenuInsertModal`"
        ></submenu-insert-form>
      </div>
      <div slot="modalFooter"></div>
    </modal-form>       
  </div>
</template>
<script>
import { utils } from "@/components/mixins/utils";
import { LIST, MENU } from "@/api/menus/";
import Modal from "@/components/modal/Modal.vue";
import MenuInsertForm from "./MenuInsertForm.vue";
import SubMenuInsertForm from "./SubMenuInsertForm.vue";
import MenuManagementContainer from "./MenuManagementContainer.vue"

export default {
  mixins: [utils],
  data() {
    return {
      menus: [],
      subMenus: [],
      selectedMenu: {
        idx: 0,
        depth: 1,
        menu: {          
        }
      },
      modalOptions: {
        modalName: "",
        modalId: ""
      },
      insertFormProps: {
        handleInsertMenu: this.insertMenu
      },
      componentKey: 0
    };
  },
  methods: {
    async getMenuList() {
      let apiUrl = MENU;
      const response = await fetch(apiUrl);
      const json = await response.json();
      return json.menus;
    },
    async getSubMenuList() {
      let apiUrl = `${MENU}/${this.selectedMenu.menu.menuId}/submenus`;
      
      const response = await fetch(apiUrl);
      const json = await response.json();
      // console.log(json)
      return json.subMenus;
    },    
    async insertMenu(formData, depth) {
      let apiUrl;
      apiUrl =
        depth == 1
          ? MENU
          : `${MENU}/${this.selectedMenu.menu.menuId}/subMenus/`;

      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const resultJson = await response.json();
      const status = await response.status;
      const modalId = this.modalOptions.modalId;

      if (resultJson.result == "ok") {
        await this.getSubMenuList().then((subMenuData)=>{          
          this.subMenus = subMenuData;        
        })
        await this.getMenuList().then(data => {
            Swal.fire("메뉴가 추가되었습니다.");
            this.menus = data;
        })          
        $(`#${modalId}`).modal('hide');
      } else {
        Swal.fire("오류가 발생했습니다.");
      }
    },
    async deleteMenu(key, depth){
      if(key == "" || depth =="") return false;
      let apiUrl = 
      depth == 1 
      ? `${MENU}/${key}` 
      : `${MENU}/${this.selectedMenu.menu.menuId}/submenus/${key}`;

      const response = await fetch(apiUrl, {
        method: "DELETE"
      })
      return response.status;
    },
    popupModal(modalId, modalName) {      
      new Promise((resolve, reject) => {
        this.componentKey = new Date().getSeconds();
        this.modalOptions.modalName = modalName;
        this.modalOptions.modalId = modalId;
        resolve();
      }).then(function() {
        $(`#${modalId}`).modal("show");
      });
    },
    async handleDeleteRowdata(key, depth) {      
      Swal.fire({
        title: "정말 삭제하시겠습니까?",
        text: "한번 삭제하면 되돌릴 수 없습니다.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return new Promise(resolve => {
            setTimeout(() => {
              this.deleteMenu(key, depth).then(function(status){
                resolve(status)
              })            
            }, 1000);
          });
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then(result => {
        if(result.dismiss == "cancel") return false;
        if(result.value == 201) {
          this.getMenuList()
            .then(data => {
              Swal.fire("Deleted!", "메뉴가 삭제되었습니다.", "success");
              this.menus = data;
            })
            .then(()=>{
              this.getSubMenuList()
                .then((subMenuData)=>{
                this.subMenus = subMenuData;
              })
            })
            .catch(error => {
              console.error(error);
            });          
        }else{
          // console.log(result)
          Swal.fire({
              title: 'Error!',
              text: 'Do you want to continue',
              type: 'warning',
              confirmButtonText: 'Cool'  
          });          
        }
      });
    },    
    handleModify() {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    },
    handleMenuClick(idx, depth) {
      this.selectedMenu.idx = idx;
      this.selectedMenu.depth = depth;      
      
      if(depth == 1){
        this.selectedMenu.menu = this.menus[idx];     
        this.getSubMenuList()
        .then((subMenuData)=>{          
          this.subMenus = subMenuData;          
        })
      }else if(depth == 2){
        this.selectedMenu.menu.subMenu = this.subMenus[idx];
      }
    }
  },
  components: {
    "modal-form": Modal,
    "menu-insert-form": MenuInsertForm,
    "submenu-insert-form": SubMenuInsertForm,
    "menu-management-container": MenuManagementContainer
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

