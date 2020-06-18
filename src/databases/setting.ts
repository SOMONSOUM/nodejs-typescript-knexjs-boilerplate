import Knex = require('knex');
const knexfile = require('../../knexfile');
export const knex: Knex = require('knex')(knexfile.development);
