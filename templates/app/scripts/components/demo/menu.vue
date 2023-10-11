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
  name: 'DemoMenu',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    isSubmenu: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    menu() {
      return this.items;
    }
  }
};
</script>
