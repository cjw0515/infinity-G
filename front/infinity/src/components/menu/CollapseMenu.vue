<template>
  <li class="nav-item" @click="setMenuActive()">
    <a
      class="nav-link"
      data-toggle="collapse"
      aria-expanded="false"
      :aria-controls="menuItem.menuName"
      :href="`#${menuItem.menuName}`"
    >
      <i class="menu-icon" v-bind:class="menuItem.menuIcon"></i>
      <span class="menu-title">{{menuItem.menuName}}</span>
      <i class="menu-arrow"></i>
    </a>
    <div class="collapse" :id="menuItem.menuName">
      <ul class="nav flex-column sub-menu" v-if="menuItem.subMenu">
        <li class="nav-item" v-for="(item) in menuItem.subMenu">
          <a
            class="nav-link"
            v-bind:class="{active: item.isActive }"
            @click="linkTo(item.subMenuLink)"
          >{{item.subMenuName}}</a>
        </li>
      </ul>
    </div>
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