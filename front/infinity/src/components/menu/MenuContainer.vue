<template>
  <ul class="nav" v-if="menuItems.length">
    <collapse-menu
      v-for="(item, idx) in menuItems"
      :key="idx"
      v-if="item.isCollapseMenu"
      :menuItem="item"
    ></collapse-menu>
    <normal-menu v-else :menuItem="item"></normal-menu>
  </ul>
</template>
<script>
import Menu from "./Menu.vue";
import CollapseMenu from "./CollapseMenu.vue";

export default {
  props: {
    menuItems: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      collapseMenuCtr: false
    };
  },
  methods: {
    toggleCollapseMenu() {
      this.collapseMenuCtr = !this.collapseMenuCtr;
    }
  },
  computed: {
    /* 
    collapseMenu: function() {
      return this.menuItems.filter(item => {
        return item.isCollapseMenu;
      });
    },
    noneCollapseMenu: function() {
      return this.menuItems.filter(item => {
        return !item.isCollapseMenu;
      });
    }
    */
  },
  components: {
    "normal-menu": Menu,
    "collapse-menu": CollapseMenu
  }
};
</script>

