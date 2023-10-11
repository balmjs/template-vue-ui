<template>
  <nav class="demo-menu-container">
    <ul :class="['demo-menu', { submenu: isSubmenu }]">
      <li v-for="(item, index) in menu" :key="index">
        <router-link :to="item.url" active-class="active">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'DemoMenu'
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  isSubmenu: {
    type: Boolean,
    default: false
  }
});

const menu = computed(() => props.items);
</script>
