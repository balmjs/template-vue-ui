import { reactive, toRefs } from 'vue';
import { useAlert } from 'balm-ui';
import { useHttp } from '@/plugins/http';
import { isDev } from '@/config';

const $alert = useAlert();
const $http = useHttp();

const state = reactive({
  demoMenu: []
});

async function getDemoMenu() {
  const url = isDev ? '/mock/menu' : '/menu.json';
  const { code, data, message } = await $http.get(url);

  if (code === 200) {
    state.demoMenu = data;
  } else {
    $alert(message);
  }
}

const useDemoStore = () => {
  return {
    ...toRefs(state),
    getDemoMenu
  };
};

export default useDemoStore;
