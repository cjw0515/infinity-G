<template>
  <div class="grid-margin stretch-card col-12" style="width:1000px">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">게시물 입력</h4>

        <form class="forms-sample">
          <div class="form-group">
            <label for="exampleInputName1">이름</label>
            <input type="text" class="form-control" id="exampleInputName1" placeholder="이름을 입력해주세요">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail3">제목</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail3"
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
          <button type="submit" class="btn btn-primary mr-2">Submit</button>
          <button class="btn btn-light">Cancel</button>
        </form>
      </div>
    </div>
    <ModalPopup title1="안녕" content1="오예" timer="3"></ModalPopup>
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
      isEdit: false
    };
  },
  methods: {
    AddContent() {},
    CancelButton() {},
    IsAction() {}
  }
};
</script>

<style>
</style>
