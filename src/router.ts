import {Router} from 'express'
import {UserController} from './controllers/UserController'

const router = Router()

/** 
 * Controller contem o método 
 * para criar um novo usuario
 */

const userController = new UserController()

/** Ao receber dados pelo método POST
 *  na rota '/users' usa o método 
 *  CREATE do controller 
 */
router.post("/users", userController.create)

export {router}