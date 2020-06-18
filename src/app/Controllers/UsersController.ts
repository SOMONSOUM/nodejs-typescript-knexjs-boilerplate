import { Request, Response, NextFunction } from 'express';
import hash from 'password-hash';
import { knex } from '../../databases/setting';

export const index = async (res: Response) => {
  const users = await knex('users').orderBy('id', 'asc');
  return res.json(users);
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params;
    const user = await knex('users').where(id);
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password, phone_number } = req.body;
    const user = await knex('users').insert({
      username,
      email,
      password: hash.generate(password),
      phone_number,
    });
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params;
    const { username, email, password, phone_number } = req.body;
    const user = await knex('users')
      .update({
        username,
        email,
        password: hash.generate(password),
        phone_number,
      })
      .where(id);
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params;
    await knex('users').where(id).del();
  } catch (error) {
    return res.json(`Doesn't exist!`);
  }
};
