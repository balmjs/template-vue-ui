<template>
  <div class="page-demo">
    <demo-menu isSubmenu :items="menu"></demo-menu>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import DemoMenu from '@/components/demo/menu';
import { useStore } from 'balm-ui';

const $store = useStore();

const menu = computed(() =>
  $store.demoMenu.length ? $store.demoMenu[1].children : []
);
</script>
