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
      const url = isDev ? '/menu' : '/menu.json';
      const requestConfig = isDev ? { baseURL: '/mock/api' } : {};

      let response = await this.$http.get(url, requestConfig);
      let { code, data, message } = response;

      if (code === 200) {
        this.demoMenu = data;
      } else {
        $alert(message);
      }
    }
  }
};
