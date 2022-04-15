import { useAlert } from 'balm-ui';
import { isDev } from '@/config';

const $alert = useAlert();

export default {
  data() {
    return {
      demoMenu: [] // shared data
    };
  },
  methods: {
    async getDemoMenu() {
      let url = isDev ? '/mock/menu' : '/menu.json';
      let response = await this.$http.get(url);
      let { code, data, message } = response;

      if (code === 200) {
        this.demoMenu = data;
      } else {
        $alert(message);
      }
    }
  }
};
