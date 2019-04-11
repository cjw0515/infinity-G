<template>
  <div class="row">
    <div class="grid-margin stretch-card" :class="sizedTableClass">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{pagingTableOptions.tableName}}</h4>
          <p class="card-description"></p>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th v-for="(theadName) in pagingTableOptions.theadNames">{{theadName}}</th>
                  <th>기타</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="pagingTableOptions.isLoading">
                  <td colspan="6">
                    <div class="circle-loader"></div>
                  </td>
                </tr>
                <slot
                  name="row"
                  v-for="(rowData) in pagingTableOptions.tableData"
                  :row-data="rowData"
                  :onClickDelete="pagingTableOptions.onClickDelete"
                  :onClickModify="pagingTableOptions.onClickModify"
                ></slot>
              </tbody>
            </table>
          </div>
        </div>
        <page-component></page-component>
      </div>
    </div>
  </div>
</template>

<script>
import Paging from "@/components/table/Paging.vue";
export default {
  data() {
    return {};
  },
  props: {
    pagingTableOptions: {
      type: Object,
      default: {
        colSize: "7",
        tableData: [],
        tableName: "기본제목",
        theadNames: [],
        onClickDelete: () => {
          alert("delete");
        },
        onClickModify: () => {
          alert("modify");
        },
        isLoading: true
      }
    }
  },
  mounted: function() {},
  created: function() {},
  computed: {
    sizedTableClass: function() {
      return `col-lg-${this.pagingTableOptions.colSize}`;
    }
  },
  components: {
    "page-component": Paging
  }
};
</script>
