<template>
  <div>
    <component v-bind:is="currentView"></component>
  </div>
</template>

<script>
import TodoComponent1 from "./TodoComponent1.vue";
import TodoComponent2 from "./TodoComponent2.vue";
import TodoComponent3 from "./TodoComponent3.vue";
import TodoComponent4 from "./TodoComponent4.vue";
import TodoComponent5 from "./TodoComponent5.vue";
// import {
//   TodoComponent1,
//   TodoComponent2,
//   TodoComponent3,
//   TodoComponent4,
//   TodoComponent5
// } from "./";

let currentComponentName = TodoComponent4;
// console.log(this.name);
export default {
  data() {
    return {
      currentView: this.name
    };
  },
  components: {
    TodoComponent1,
    TodoComponent2,
    TodoComponent3,
    TodoComponent4,
    TodoComponent5
  },
  props: ["name"],
  created: function() {
    console.log("created");
  },
  beforeUpdate: function() {
    console.log("beforeUpdate");
  }
};
</script>

<style>
</style>
