// Update with your config settings.
const { config } = require('dotenv');
config();
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: process.env.DATABASE,
    },
    migrations: {
      extension: 'js',
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/databases/migrations`,
    },
    seeds: {
      extension: 'js',
      directory: `${__dirname}/src/database/seeds`,
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
