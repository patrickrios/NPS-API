import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm'
import { Survey } from '../models/Survey'
import { SurveyRepository } from '../repositories/SurveysRepository'

class SurveysController {

    async create( request: Request, reponse: Response){
        const {title, description} = request.body

        const surveyRepository = getCustomRepository( SurveyRepository )

        const survey = surveyRepository.create({
            title,
            description
        })

        await surveyRepository.save( survey )

        return reponse.status(201).json( survey )
    }

    async show(request: Request, response: Response){
        const surveysRepository = getCustomRepository( SurveyRepository )
        const all = await surveysRepository.find()
        return response.json( all )
    }
}

export { SurveysController }