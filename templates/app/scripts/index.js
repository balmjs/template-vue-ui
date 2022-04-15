// import '@/polyfill';
import { isIE, killIE } from '@/kill-ie';
import createMyApp from './main';

import '@mock-server'; // For mock apis

isIE ? killIE() : createMyApp();
