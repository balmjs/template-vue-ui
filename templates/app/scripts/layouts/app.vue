<template>
  <div class="container">
    <header class="hero">
      <img :src="logo" alt />
      <demo-hello></demo-hello>
    </header>
    <hr />
    <div class="content">
      <demo-menu :items="$store.demoMenu"></demo-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DemoHello from '@/components/demo/hello';
import DemoMenu from '@/components/demo/menu';
import logo from '@/assets/logo.png';

export default {
  name: 'App',
  metaInfo: {
    title: 'MyApp'
  },
  components: {
    DemoHello,
    DemoMenu
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
