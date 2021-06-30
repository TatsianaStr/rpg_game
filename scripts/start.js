/* eslint-disable no-unused-vars */
const path = require('path');

/* eslint-disable no-console */
const Hapi = require('@hapi/hapi');

const port = process.env.PORT || 3000;

const FILES = /\.(js|js.map|woff|woff2|svg|bmp|jpg|jpeg|gif|png)(\?v=\d+\.\d+\.\d+)?$/;
const PATH = {
  '/': 'index.html',
};
const init = async () => {
  const server = Hapi.server({
    port,
  });

  // eslint-disable-next-line global-require
  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/{path*}',
    // eslint-disable-next-line no-unused-vars
    handler: (request, h) => {
      if (FILES.test(request.path)) {
        return h.file(path.join(process.cwd(), 'dist', request.path));
      }
      return h.file(path.join(process.cwd(), 'dist', PATH[request.path]));
    },

  });

  await server.start();
  console.log('Start running on $s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
