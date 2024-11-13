// import '@/polyfill';
import { isIE, killIE } from '@/kill-ie';
import createMyApp from './main';

isIE ? killIE() : createMyApp();
