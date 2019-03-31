<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <menu-container v-bind:menuItems="menuItems"></menu-container>
  </nav>
</template>

<script>
import MenuContainer from "@/components/menu/MenuContainer.vue";
import EventBus from "@/EventBus";

export default {
  components: {
    "menu-container": MenuContainer
  },
  data() {
    return {
      menuItems: [
        {
          menuTitle: "Home",
          menuIcon: "ti-home",
          menuLink: "/",
          isActive: false,
          isCollapseMenu: false
        },
        {
          menuTitle: "todolists",
          menuIcon: "ti-view-list",
          menuLink: "/todolists/todocomponent4",
          isActive: false,
          isCollapseMenu: true,
          subMenu: [
            {
              subMenuName: "이종화",
              subMenuLink: "/todolists/todocomponent1",
              isActive: false
            },
            {
              subMenuName: "김광일",
              subMenuLink: "/todolists/todocomponent2",
              isActive: false
            },
            {
              subMenuName: "임보라",
              subMenuLink: "/todolists/todocomponent3",
              isActive: false
            },
            {
              subMenuName: "최종원",
              subMenuLink: "/todolists/todocomponent4",
              isActive: false
            }
          ]
        },
        {
          menuTitle: "todolistss",
          menuIcon: "ti-view-list",
          menuLink: "/todolists/todocomponent4",
          isActive: false,
          isCollapseMenu: true,
          subMenu: [
            {
              subMenuName: "이종화",
              subMenuLink: "/todolists/todocomponent1/",
              isActive: false
            },
            {
              subMenuName: "김광일",
              subMenuLink: "/todolists/todocomponent2/",
              isActive: false
            },
            {
              subMenuName: "임보라",
              subMenuLink: "/todolists/todocomponent3/",
              isActive: false
            },
            {
              subMenuName: "최종원",
              subMenuLink: "/todolists/todocomponent4/",
              isActive: false
            }
          ]
        },
        {
          menuTitle: "UI Elements",
          menuIcon: "ti-settings",
          menuLink: "/todolists/todocomponent4",
          isActive: false,
          isCollapseMenu: false
        }
      ]
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
    console.log("menu mounted");
  }
};
</script>
