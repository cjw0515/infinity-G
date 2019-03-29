<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="index.html">
          <i class="ti-home menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/widgets/widgets.html">
          <i class="ti-settings menu-icon"></i>
          <span class="menu-title">Widgets</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          href="#ui-basic"
          aria-expanded="false"
          aria-controls="ui-basic"
        >
          <i class="ti-palette menu-icon"></i>
          <span class="menu-title">UI Elements</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="pages/ui-features/accordions.html">Accordions</a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          href="#ui-advanced"
          aria-expanded="false"
          aria-controls="ui-advanced"
        >
          <i class="ti-view-list menu-icon"></i>
          <span class="menu-title">Advanced UI</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-advanced">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="pages/ui-features/dragula.html">Dragula</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages/ui-features/clipboard.html">Clipboard</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import MenuContainer from '@/components/menu/MenuContainer.vue'
export default {
  components:{
    'menu-container': MenuContainer
  }
};
</script>
