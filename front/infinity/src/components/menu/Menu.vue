<template>
  <li class="nav-item one" v-bind:class="{active: menuItem.isActive }" @click="setMenuActive()">
    <a class="nav-link" @click="linkTo(menuItem.menuLink)">
      <i v-bind:class="menuItem.menuIcon" class="menu-icon"></i>
      <span class="menu-title">{{menuItem.menuTitle}}</span>
    </a>
  </li>
</template>
<script>
import { utils } from "@/components/mixins/utils";
import EventBus from "@/EventBus";

export default {
  mixins: [utils],
  props: {
    menuItem: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    setMenuActive() {
      EventBus.$emit("setMenuActive");
    }
  }
};
</script>
<style scoped>
a {
  cursor: pointer;
}
</style>