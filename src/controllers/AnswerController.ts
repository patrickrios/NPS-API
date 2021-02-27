import {Request, response, Response} from 'express'
import { getCustomRepository } from 'typeorm';
import { AppErrors } from '../errors/AppErrors';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';


class AnswerController{

    async execute(request: Request, reponse: Response){
        const {value} = request.params;
        const {u} = request.query

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        })

        if(!surveyUser){
            throw new AppErrors("Survey User does not exists!")
            
        }

        surveyUser.value = Number(value)
        await surveysUsersRepository.save(surveyUser)

        return response.json(surveyUser)
    }

}

export {AnswerController}



/**
 * Route params -> Fazem parte da rota
 * routes.get("/answers/:value")
 * 
 * Query Paramns -> Busca, paginação, não obrigatoria
 * ?
 * chave=valor
*/