import {Router} from 'express'
import { AnswerController } from './controllers/AnswerController'
import { SendMailConroller } from './controllers/SendMailController'
import { SurveysController } from './controllers/SurveysController'
import {UserController} from './controllers/UserController'

const router = Router()

/** 
 * Controller contem o método 
 * para criar um novo usuario
 */

const userController = new UserController()
const surveysController = new SurveysController()
const sendMailController = new SendMailConroller()
const answerController = new AnswerController()

/** Ao receber dados pelo método POST
 *  na rota '/users' usa o método 
 *  CREATE do controller 
 */
router.post("/users", userController.create)

router.post('/surveys', surveysController.create)
router.get('/surveys', surveysController.show)

router.post('/sendMail', sendMailController.execute )

router.get('/answers/:value', answerController.execute)

export {router}