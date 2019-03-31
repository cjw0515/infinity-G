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

let currentComponentName = TodoComponent4;

export default {
  data() {
    return {
      currentView: this.name
    };
  },
  components: {
    todocomponent1: TodoComponent1,
    todocomponent2: TodoComponent2,
    todocomponent3: TodoComponent3,
    todocomponent4: TodoComponent4
  },
  props: ["name"],
  created: function() {
    // console.log("created");
  },
  beforeUpdate: function() {
    // console.log("beforeUpdate");
  }
};
</script>

<style>
</style>
