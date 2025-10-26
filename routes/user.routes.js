import {Router} from 'express';
import {getUsers, getUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * /users:
  *   get:
 *     summary: Get all users
 *     description: Retrieve a list of users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 */
userRouter.get('/', getUsers);
userRouter.get('/:id', authorize, getUser);
userRouter.post('/users', (req, res) => res.send({title: "CREATE a uses"}));
userRouter.put('/:id', authorize, updateUser);
userRouter.delete('/:id', authorize, deleteUser);

export default userRouter;