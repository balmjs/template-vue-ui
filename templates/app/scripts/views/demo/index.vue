<template>
  <div class="page-demo">
    <my-menu isSubmenu :items="menu"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from '@/views/components/my-menu';

export default {
  metaInfo: {
    titleTemplate: '%s - UI'
  },
  components: {
    MyMenu
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
