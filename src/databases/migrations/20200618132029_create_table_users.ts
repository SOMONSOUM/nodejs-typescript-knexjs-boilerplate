import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  if (!(await knex.schema.hasTable('users'))) {
    return await knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username', 108).notNullable();
      table.string('email', 225).unique().notNullable();
      table.string('password', 225).notNullable();
      table.string('phone_number').unique().notNullable();
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('users');
}
