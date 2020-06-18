import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Sok Dara',
          email: 'sokdara@gmail.com',
          password: '123123',
          phone_number: '099965943',
        },
        {
          username: 'Meas Oudom',
          email: 'measoudom@gmail.com',
          password: '123123',
          phone_number: '099965944',
        },
      ]);
    });
}
