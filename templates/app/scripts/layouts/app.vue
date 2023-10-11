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
export default {
  name: 'App'
};
</script>

<script setup>
import { onMounted } from 'vue';
import DemoHello from '@/components/demo/hello';
import DemoMenu from '@/components/demo/menu';
import logo from '@/assets/logo.png';
import { useBus, useStore } from 'balm-ui';

const $bus = useBus();
const $store = useStore();

onMounted(async () => {
  $bus.on('on-error', (message) => {
    // TODO: global error handler
    console.log(message);
  });

  await $store.getDemoMenu();
});
</script>
