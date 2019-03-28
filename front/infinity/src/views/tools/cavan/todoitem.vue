<template>
  <li>
    <div class="form-check">
      <label class="form-check-label">
        {{tododata.titledata}} {{tododata.todoval}}
        <i class="input-helper">{{tododata.pri}}</i>
        <i class="input-helper"></i>
      </label>
      <i class="remove ti-close" @click="delbtn(tododata.uid)">삭제</i>
    </div>
  </li>
</template>

<script>
import eventBus from "../../../EventBus.js";

export default {
  props: ["tododata"],
  data() {
    return {};
  },
  mounted: {},
  methods: {
    delbtn(uid) {
      if (confirm("삭제하시겠습니까?")) {
        eventBus.$emit("DeleteCavan", uid);
      }
    }
  }
};
</script>

<style>
</style>
