import Knex from 'knex';
import { Model } from 'objection';
import dbconf from '../../config/knexfile';

async function dbConnector(fastify, options) {
  const knex = Knex(dbconf.development);
  Model.knex(knex);

  // fastify.decorate('mongo', db);
}

export default dbConnector;
