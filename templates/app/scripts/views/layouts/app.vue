<template>
  <div class="container">
    <header class="hero">
      <img :src="logo" alt />
      <hello></hello>
    </header>
    <hr />
    <div class="content">
      <my-menu :items="$store.demoMenu"></my-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from '@/views/components/hello';
import MyMenu from '@/views/components/my-menu';
import logo from '@/assets/logo.png';

export default {
  name: 'App',
  metaInfo: {
    title: 'MyApp'
  },
  components: {
    Hello,
    MyMenu
  },
  data() {
    return {
      logo
    };
  },
  created() {
    this.$store.getDemoMenu();
  },
  mounted() {
    this.$bus.on('on-error', (message) => {
      // TODO: global error handler
      console.log(message);
    });
  }
};
</script>
