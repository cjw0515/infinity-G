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
                <tr v-for="(row, idx) in pagingTableOptions.tableData" :key="idx">
                  <td>{{row.menuTitle}}</td>
                  <td>{{row.menuLink}}</td>
                  <td>{{row.menuIcon}}</td>
                  <td>{{row.isCollapseMenu}}</td>
                  <td>
                    <i class="ti-trash" @click="handleDeleteRowData()"></i>
                    <i class="ti-settings" @click="handleModifyRowData()"></i>
                  </td>
                </tr>
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
        }
      }
    }
  },
  methods: {
    handleDeleteRowData() {
      this.pagingTableOptions.onClickDelete();
    },
    handleModifyRowData() {
      this.pagingTableOptions.onClickModify();
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

<style scoped>
i {
  display: inline-block;
  font-size: 20px;
  width: 40px;
  color: #248afd;
  cursor: pointer;
}
</style>
