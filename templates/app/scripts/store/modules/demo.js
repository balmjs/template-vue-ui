import { useAlert } from 'balm-ui';
import { isDev } from '@/config';
import { apiEndpoint } from '@/plugins/http';

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
      const requestConfig = isDev ? { baseURL: `/mock${apiEndpoint}` } : {};

      const response = await this.$http.get(url, requestConfig);
      const { code, data, message } = response;

      if (code === 200) {
        this.demoMenu = data;
      } else {
        $alert(message);
      }
    }
  }
};
