import { responseHandler } from '@mock-server/handler';

export function getDemoApis(server) {
  server.get('/menu', () =>
    responseHandler([
      {
        name: 'Home',
        url: '/home'
      },
      {
        name: 'Demo',
        url: '/demo',
        children: [
          {
            name: 'BalmUI',
            url: '/demo/balm-ui'
          },
          {
            name: 'BalmCLI',
            url: '/demo/balm-cli'
          }
        ]
      }
    ])
  );
}
