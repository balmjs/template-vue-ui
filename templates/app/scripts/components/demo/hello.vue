<template>
  <div class="demo-hello">
    <h1>{{ msg }}</h1>
    <p>
      thx
      <a href="//balm.js.org/">BalmJS</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DemoHello'
};
</script>

<script setup>
import { ref } from 'vue';

const msg = ref('');

msg.value = 'Hello Vue 3.0 App';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
