<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <menu-container v-bind:menuItems="menuItems"></menu-container>
  </nav>
</template>

<script>
import MenuContainer from "@/components/menu/MenuContainer.vue";
import EventBus from "@/EventBus";
import { LIST } from "@/api/menus/";

export default {
  components: {
    "menu-container": MenuContainer
  },
  data() {
    return {
      menuItems: []
    };
  },
  methods: {
    setMnuesInactive() {
      for (let i in this.menuItems) {
        // console.log(this.menuItems[i].isActive);
        this.menuItems[i].isActive = false;
      }
    },
    setCurrentMenu() {
      const modifiedArr = this.menuItems.map(item => {
        let tmpArr = [];
        let tmpSubArr = [];

        if (!item.isCollapseMenu) {
          tmpArr =
            item.menuLink == this.$router.currentRoute.fullPath
              ? { ...item, isActive: true }
              : item;
        } else {
          tmpArr = item;
        }
        return tmpArr;
      });
      this.menuItems = modifiedArr;
    }
  },
  created: function() {
    let _this = this;
    EventBus.$on("setMenuActive", function() {
      _this.setMnuesInactive();
      _this.setCurrentMenu();
    });
  },
  mounted: function() {
    this.setCurrentMenu();
    async function fetch_api() {
      let apiUrl = LIST;
      const response = await fetch(apiUrl);
      const json = await response.json();
      return json.menus;
    }
    fetch_api()
      .then(data => {
        this.menuItems = data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
