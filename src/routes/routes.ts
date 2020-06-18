import express from 'express';
const UsersController = require('../app/Controllers/UsersController');

export const routes = express.Router();

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.remove);
