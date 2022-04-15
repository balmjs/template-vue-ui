<template>
  <div class="container">
    <header class="hero">
      <img :src="logo" alt />
      <hello></hello>
    </header>
    <hr />
    <div class="content">
      <my-menu :items="store.demoMenu"></my-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Hello from '@/views/components/hello';
import MyMenu from '@/views/components/my-menu';
import logo from '@/assets/logo.png';
import { useBus, useStore } from 'balm-ui';

export default {
  name: 'App',
  components: {
    Hello,
    MyMenu
  },
  setup() {
    const bus = useBus();
    const store = useStore();

    onMounted(async () => {
      bus.on('on-error', (message) => {
        // TODO: global error handler
        console.log(message);
      });

      await store.getDemoMenu();
    });

    return {
      store,
      logo
    };
  }
};
</script>
