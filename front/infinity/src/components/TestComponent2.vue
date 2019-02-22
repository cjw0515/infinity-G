<template>
  <div>
    <div>helloworld</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // vuex에서 헬퍼함수로 사용. getters와 actions에 등록한 메서드를 매핑해준다.
import { GET_TESTDATA } from "../store/mutation-types";

export default {
  mounted() {
    this.GET_TESTDATA();
  },
  data() {
    return {
      testData: []
    };
  },
  methods: {
    ...mapActions([GET_TESTDATA])
  },
  computed: {
    ...mapGetters(["testData"])
  }
};
</script>
<style>
</style>
