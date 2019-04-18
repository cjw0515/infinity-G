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
        <ul class="list-group list-group-flush" v-if="menus.length > 0">
          <li class="list-group-item" @click="popupModal">
            <i class="btn-icon ti-plus"></i>
            <span style="color:#248afd">메뉴추가</span>
          </li>
          <li
            class="list-group-item"
            v-for="(menu, idx) in menus"
            :key="idx"
            @click="handleMenuClick(idx, 1)"
          >{{menu.menuTitle}}</li>
        </ul>
      </div>
      <!-- 서브메뉴 -->
      <div class="card child text-left">
        <div class="card-header">
          <h4 class="card-title">2depth메뉴</h4>
        </div>
        <ul class="list-group list-group-flush" v-if="selectedMenu.menu.isCollapseMenu">
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
        <ul class="list-group list-group-flush">
          <li class="list-group-item">메뉴이름 : {{selectedMenu.menu.menuTitle}}</li>
          <li class="list-group-item">링크 : {{selectedMenu.menu.menuLink}}</li>
          <li class="list-group-item">아이콘 : {{selectedMenu.menu.menuIcon}}</li>
          <li class="list-group-item">2depth : {{selectedMenu.menu.isCollapseMenu}}</li>
          <li class="list-group-item">사용 : {{selectedMenu.menu.isUsing}}</li>
        </ul>
      </div>
    </div>
    <modal-form :modal-options="modalOptions">
      <div slot="modalBody">
        <div class="row">
          <div class="card-body">
            <h4 class="card-title">메뉴 삽입</h4>
            <p class="card-description"></p>
            <form class="forms-sample">
              <div class="form-group row">
                <label for="exampleInputUsername2" class="col-sm-3 col-form-label">메뉴이름</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputUsername2"
                    placeholder="Username"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">링크</label>
                <div class="col-sm-9">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail2"
                    placeholder="Email"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputMobile" class="col-sm-3 col-form-label">depth</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputMobile"
                    placeholder="Mobile number"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputPassword2" class="col-sm-3 col-form-label">아이콘</label>
                <div class="col-sm-9">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="Password"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputConfirmPassword2" class="col-sm-3 col-form-label">사용유무</label>
                <div class="col-sm-9">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputConfirmPassword2"
                    placeholder="Password"
                  >
                </div>
              </div>
              <button type="submit" class="btn btn-primary mr-2">생성</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
            </form>
          </div>
        </div>
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
import TableWithPaging from "@/components/table/TableWithPaging.vue";
import { LIST } from "@/api/menus/";
import Modal from "@/components/modal/Modal.vue";
import ValidationForm from "@/components/form/ValidationForm.vue";
import MenuTableRow from "@/pages/menu/MenuTableRow.vue";

export default {
  data() {
    return {
      menus: [],
      selectedMenu: {
        idx: 0,
        depth: 1,
        menu: {}
      },
      modalOptions: {
        modalName: "메뉴 삽입",
        modalId: "menuInsertModal"
      },
      pagingTableOptions: {
        colSize: "7",
        tableData: [],
        tableName: "메뉴관리",
        theadNames: ["메뉴이름", "link", "아이콘", "2depth", "사용"],
        onClickDelete: this.delRowData,
        onClickModify: this.popupModal,
        isLoading: true
      },
      validationFormOptions: {
        rules: {},
        messages: {},
        inputEles: [
          {
            inputName: "menuName",
            inputNameDisp: "메뉴이름",
            isRequired: true
          },
          {
            inputName: "menuLink",
            inputNameDisp: "링크",
            isRequired: true
          },
          {
            inputName: "menuIcon",
            inputNameDisp: "아이콘",
            isRequired: true
          },
          {
            inputName: "2depth",
            inputNameDisp: "2depth",
            isRequired: true
          },
          {
            inputName: "isUsing",
            inputNameDisp: "사용",
            isRequired: true
          }
        ],
        buttonEle: {
          buttonName: "수정",
          handleClick: () => {
            alert();
          }
        }
      }
    };
  },
  methods: {
    async getMenuList() {
      let apiUrl = LIST;
      const response = await fetch(apiUrl);
      const json = await response.json();
      return json.menus;
    },
    popupModal() {
      $("#menuInsertModal").modal("show");
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
    "table-paging": TableWithPaging,
    "modal-form": Modal,
    "validation-form": ValidationForm,
    "table-row": MenuTableRow
  },
  mounted: function() {
    this.getMenuList()
      .then(data => {
        this.menus = data;
        this.pagingTableOptions.tableData = data;
        this.pagingTableOptions.isLoading = false;
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
