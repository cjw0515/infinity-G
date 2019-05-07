<template>
  <div class="row">
    <div class="card-body">
      <h4 class="card-title"></h4>
      <p class="card-description"></p>
      <form class="forms-sample">
        <div class="form-group row">
          <label for="menuName" class="col-sm-3 col-form-label">메뉴이름</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="menuName"
              placeholder="메뉴이름"
              v-model="formData.menuName"
            >
          </div>
        </div>
        <div class="form-group row">
          <label for="menuLink" class="col-sm-3 col-form-label">링크</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="menuLink"
              placeholder="/"
              v-model="formData.menuLink"
            >
          </div>
        </div>
        <div class="form-group row">
          <label for="depth" class="col-sm-3 col-form-label">depth</label>
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              id="depth"
              placeholder="1"
              v-model="formData.menuDepth"
            >
          </div>
        </div>
        <div class="form-group row">
          <label for="exampleInputMobile2" class="col-sm-3 col-form-label">아이콘</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="exampleInputMobile2"
              placeholder
              v-model="formData.menuIcon"
            >
          </div>
        </div>
        <div class="form-group row">
          <label for="exampleInputMobile3" class="col-sm-3 col-form-label">사용유무</label>
          <div class="col-sm-9">
            <input type="checkbox" v-model="formData.menuIsUsing">
          </div>
        </div>
        <div class="form-group row">
          <label for="menuOrder" class="col-sm-3 col-form-label">메뉴순서</label>
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              id="menuOrder"
              placeholder="1"
              v-model="formData.menuOrder"
            >
          </div>
        </div>
        <button type="button" @click="handleSubmit()" class="btn btn-primary mr-2">생성</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        menuName: "",
        menuLink: "",
        menuDepth: "",
        menuIcon: "",
        menuIsUsing: false,
        subMenu: {},
        menuOrder: this.maxMenuNumber + 1
      }
    };
  },
  props: {
    insertFormProps: {
      type: Object,
      default: () => ({
        handleInsertMenu: () => {
          alert("default click event");
        }
      })
    },
    maxMenuNumber: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleSubmit() {
      // if(!this.validationCheck()){
      if (false) {
        return false;
      }
      this.insertFormProps.handleInsertMenu(this.formData, 1);
    },
    validationCheck() {
      Swal.fire("validation failed");
      return false;
    }
  }
};
</script>
