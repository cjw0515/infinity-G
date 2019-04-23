<template>
  <div class="row">
    <div class="card-body">
      <h4 class="card-title">{{`${parentMenuLink}/`}}</h4>
      <p class="card-description"></p>
      <form class="forms-sample">
        <div class="form-group row">
          <label for="subMenuName" class="col-sm-3 col-form-label">메뉴이름</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="subMenuName"
              placeholder="메뉴이름"
              v-model="formData.subMenuName"
            >
          </div>
        </div>
        <div class="form-group row">
          <label for="subMenuLink" class="col-sm-3 col-form-label">링크</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="subMenuLink"
              placeholder="/"
              v-model="formData.subMenuLink"
            >
          </div>
        </div>                
        <div class="form-group row">
          <label for="exampleInputMobile3" class="col-sm-3 col-form-label">사용유무</label>
          <div class="col-sm-9">
            <input type="checkbox" v-model="formData.subMenuIsUsing">
          </div>
        </div>
        <div class="form-group row">
          <label for="subMenuOrder" class="col-sm-3 col-form-label">메뉴순서</label>
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              id="subMenuOrder"
              placeholder="1"
              v-model="formData.subMenuOrder"
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
        subMenuName: "",
        subMenuLink: "",
        subMenuIsUsing: false,
        subMenuOrder: 1        
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
    },
    parentMenuLink: {
      type: String,
      defualt: ""
    }
  },
  methods: {
    handleSubmit() {
      // if(!this.validationCheck()){
      if (false) {
        return false;
      }
      this.insertFormProps.handleInsertMenu(this.formData, 2);
    },
    validationCheck() {
      Swal.fire("validation failed");
      return false;
    }
  }
};
</script>
