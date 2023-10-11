import DemoIndex from '@/pages/demo/index';
import DemoBalmUI from '@/pages/demo/balm-ui';
import DemoBalmCLI from '@/pages/demo/balm-cli';

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
        path: 'balm-cli',
        name: 'demo.balm-cli',
        component: DemoBalmCLI
      }
    ]
  }
];

export default routes;
