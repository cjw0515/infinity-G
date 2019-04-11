<template>
  <div>
    <table-paging :paging-table-options="pagingTableOptions"></table-paging>
    <modal-form :modal-options="modalOptions">      
      <validation-form slot="modalBody" :validation-form-options="validationFormOptions"></validation-form>
      <div slot="modalFooter"></div>
    </modal-form>
  </div>
</template>
<script>
import { utils } from "@/components/mixins/utils";
import TableWithPaging from "@/components/table/TableWithPaging.vue";
import { LIST } from "@/api/menus/";
import Modal from "@/components/modal/Modal.vue";
import ValidationForm from "@/components/form/ValidationForm.vue";

export default {
  data() {
    return {      
      modalOptions: {
        modalName: "메뉴 수정",
        modalId: "menuControlModal"
      },
      pagingTableOptions: {
        colSize: "7",
        tableData: [],
        tableName: "메뉴관리",
        theadNames: ["메뉴이름", "link", "아이콘", "2depth"],
        onClickDelete: this.delRowData,
        onClickModify: this.popupModal,
        isLoading: true
      },
      validationFormOptions: {
        rules: {},
        messages: {},
        inputEles: [
          {
            inputName: "default",
            inputNameDisp: "default",                
            isRequired: true
          },
        ],
        buttonEle: {
          buttonName: "수정",
          handleClick: ()=>{
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
      $("#menuControlModal").modal("show");
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
    }
  },
  components: {
    "table-paging": TableWithPaging,
    "modal-form": Modal,
    "validation-form": ValidationForm
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
