import { Request, Response, NextFunction } from 'express';
import hash from 'password-hash';
import { knex } from '../../databases/setting';

export const index = async (req: Request, res: Response) => {
  const users = await knex('users').orderBy('id', 'asc');
  return res.json({ users });
};

export const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await knex('users').where({ id });
    return res.status(200).json(user);
  } catch (error) {
    return res.json(error);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { username, email, password, phone_number } = req.body;
    const user = await knex('users').insert({
      username,
      email,
      password: hash.generate(password),
      phone_number,
    });
    return res.status(200).json({ user });
  } catch (error) {
    return res.json(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username, email, password, phone_number } = req.body;
    const user = await knex('users')
      .update({
        username,
        email,
        password: hash.generate(password),
        phone_number,
      })
      .where({ id });
    return res.status(200).json({ user });
  } catch (error) {
    return res.json(error);
  }
};

export const del = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await knex('users').where({ id }).delete();
    return res.json(`User has id=${id} has been deleted`);
  } catch (error) {
    return res.json(error);
  }
};
