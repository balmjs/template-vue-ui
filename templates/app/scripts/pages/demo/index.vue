<template>
  <div class="page-demo">
    <demo-menu isSubmenu :items="menu"></demo-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import DemoMenu from '@/components/demo/menu';

export default {
  metaInfo: {
    titleTemplate: '%s - UI'
  },
  components: {
    DemoMenu
  },
  computed: {
    menu() {
      return this.$store.demoMenu.length
        ? this.$store.demoMenu[1].children
        : [];
    }
  }
};
</script>
