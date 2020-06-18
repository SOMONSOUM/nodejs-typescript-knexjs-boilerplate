import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  if (!(await knex.schema.hasTable('profiles'))) {
    return await knex.schema.createTable('profiles', (table) => {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table
        .string('avatar')
        .defaultTo(
          'https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png'
        );
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('profiles');
}
