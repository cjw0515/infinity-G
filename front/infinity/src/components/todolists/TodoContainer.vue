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

export default {
  data() {
    return {
      currentView: TodoComponent4
    };
  },
  components: {
    TodoComponent1,
    TodoComponent2,
    TodoComponent3,
    TodoComponent4,
    TodoComponent5
  }
};
</script>

<style>
</style>
