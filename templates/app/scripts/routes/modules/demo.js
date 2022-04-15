import DemoIndex from '@/views/demo/index';
import DemoBalmUI from '@/views/demo/balm-ui';
import DemoBalmUILite from '@/views/demo/balm-ui-lite';

let routes = [
  {
    path: '/demo',
    component: DemoIndex,
    children: [
      {
        path: '',
        name: 'demo.index',
        redirect: { name: 'demo.balm-ui' }
      },
      {
        path: 'balm-ui',
        name: 'demo.balm-ui',
        component: DemoBalmUI
      },
      {
        path: 'balm-ui-lite',
        name: 'demo.balm-ui-lite',
        component: DemoBalmUILite
      }
    ]
  }
];

export default routes;
