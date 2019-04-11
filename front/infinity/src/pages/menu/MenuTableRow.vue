<template>
  <tr>
    <td>{{rowData.menuTitle}}</td>
    <td>{{rowData.menuLink}}</td>
    <td>
      <i :class="rowData.menuIcon"/>
    </td>
    <td>{{rowData.isCollapseMenu}}</td>
    <td>{{rowData.isUsing}}</td>
    <td>
      <i class="btn-icon ti-trash" @click="handleDeleteRowData()"></i>
      <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    rowData: {
      type: Object,
      default: () => ({
        menuTitle: "default",
        menuLink: "default",
        menuIcon: "default",
        isCollapseMenu: true
      })
    },
    onClickDelete: {
      type: Function,
      default: () => {}
    },
    onClickModify: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleDeleteRowData() {
      this.onClickDelete();
    },
    handleModifyRowData() {
      this.onClickModify();
    }
  }
};
</script>
<style scoped>
.btn-icon {
  display: inline-block;
  font-size: 20px;
  width: 40px;
  color: #248afd;
  cursor: pointer;
}
</style>
