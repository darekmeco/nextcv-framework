import fastify from 'fastify';
import resume from '../modules/resume/index';
import database from './database';

function App() {
  this.f = fastify.call(this, { logger: true });
  this.f.register(database);
  this.f.get('/test', (request, reply) => reply.send({ hello: 'world' }));
  this.f.register(resume);
}

App.prototype.start = async function start() {
  try {
    await this.f.ready();
    await this.f.listen(3000);
    this.f.log.info(`server listening on ${this.f.server.address().port}`);
  } catch (err) {
    this.f.log.error(err);
    process.exit(1);
  }
};

export default new App();
