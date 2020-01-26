import routes from './routes';

export default function (fastify, opts, done) {
  fastify.decorate('utility', () => { console.log('decoococococco'); });
  fastify.route(routes);
  done();
}
