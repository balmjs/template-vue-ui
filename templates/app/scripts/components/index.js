import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
import { balmUIConfig, balmUIPlusConfig } from './config';

export default function useComponents(Vue) {
  Vue.use(BalmUI, balmUIConfig);
  Vue.use(BalmUIPlus, balmUIPlusConfig);
}
