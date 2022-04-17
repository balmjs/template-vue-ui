<template>
  <div class="page-demo">
    <my-menu isSubmenu :items="menu"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from 'vue';
import MyMenu from '@/views/components/my-menu';
import { useStore } from 'balm-ui';

export default {
  components: {
    MyMenu
  },
  setup() {
    const store = useStore();

    const menu = computed(() => {
      return store.demoMenu.length ? store.demoMenu[1].children : [];
    });

    return {
      menu
    };
  }
};
</script>
