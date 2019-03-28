<template>
<div class="col-md-12 grid-margin">
    <div class="card">
      <div class="card-body">
        <form class="form-inline">
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <input
            type="text"
            refs="t"
            v-model="Title"
            class="form-control mb-2 mr-sm-2"
            placeholder="제목"
          >
          <input
            type="text"
            refs="to"
            v-model="TODO"
            class="form-control mb-2 mr-sm-2"
            placeholder="할일"
          >
          <div class="form-group row">
            <div class="col-sm-9">
              <select class="form-control mb-2 mr-sm-2" v-model="SEL">
                <option disabled value>중요도</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
          </div>

          <button type="submit" class="btn btn-primary mb-2" @click="RegAction()">등록</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "../../../EventBus.js";
var _this = this;

export default {
  data() {
    return {
      Title: "",
      TODO: "",
      SEL: ""
    };
  },
  methods: {
    RegAction() {
      if (this.Title.trim().length == 0) {
        alert("제목을 입력해주세요");
        this.$refs.t.focus();
        return;
      }
      if (this.TODO.trim().length == 0) {
        alert("할일을 입력해주세요");
        this.$refs.to.focus();
        return;
      }

      if (this.SEL.trim().length == 0) {
        alert("중요도를 선택해주세요");
        return;
      }
      let tododata = {
        titledata: this.Title,
        todoval: this.TODO,
        pri: this.SEL,
        fix: false
      };
      this.$emit("addTodo", tododata);
      this.ClearValue();
    },
    ClearValue() {
      this.Title = "";
      this.TODO = "";
      this.SEL = "";
    }
  }
};
</script>

<style>
</style>
