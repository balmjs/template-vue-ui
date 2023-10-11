import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
import { balmUIConfig, balmUIPlusConfig } from './config';

export default function useComponents(app) {
  app.use(BalmUI, balmUIConfig);
  app.use(BalmUIPlus, balmUIPlusConfig);
}
