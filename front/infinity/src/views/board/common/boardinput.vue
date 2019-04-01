<template>
  <div class="grid-margin stretch-card col-12" style="width:1000px">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">게시물 입력</h4>

        <form class="forms-sample">
          <div class="form-group">
            <label for="exampleInputName1">이름</label>
            <input type="text" class="form-control" id="exampleInputName1" v-model="name" placeholder="이름을 입력해주세요">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail3">제목</label>
            <input              
              class="form-control"
              id="exampleInputEmail3"
              v-model="title"
              placeholder="제목을 입력해주세요"
            >
          </div>

          <div class="form-group">
            <label for="exampleSelectGender">성별</label>
            <select class="form-control" id="exampleSelectGender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div class="form-group">
            <label>File upload</label>
            <input type="file" name="img[]" class="file-upload-default">
            <div class="input-group col-xs-12">
              <input
                type="text"
                class="form-control file-upload-info"
                disabled
                placeholder="Upload Image"
              >
              <span class="input-group-append">
                <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
              </span>
            </div>
          </div>

          <div class="form-group">
            <label for="exampleTextarea1">내용</label>
            <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
          </div>
          <button type="submit" class="btn btn-primary mr-2" @click="AddContent()">Submit</button>
          <button class="btn btn-light">Cancel</button>
        </form>
      </div>
    </div>
    <ModalPopup    ref="popup"  ></ModalPopup>
  </div>
</template>

<script>
import BoardEntity from "./boardentity.js";
import ModalPopup from "./modalpopup.vue";

export default {
  components: {
    ModalPopup
  },
  data() {
    return {
      name:'',
      title:'',
      gender:'',
      cotent:'',
      isEdit: false
    };
  },
  methods: {
    AddContent() {
      //alert("");
      this.$refs.popup.popupSet('고고','구구',3);
      //this.ModalPopup.popupSet('고고','구구',3);
      //foo.popupSet('고고','구구',3);
      //this.popupCall('가가','나나',3);
      //this.ModalPopup.vshop = true;
    },
    CancelButton() {},
    IsAction() {} 
  }
};
</script>

<style>
</style>
