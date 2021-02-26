import {Response, Request} from 'express'
import {resolve} from 'path'
import { getCustomRepository } from 'typeorm';
import { SurveyRepository } from '../repositories/SurveysRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import SendMailService from '../services/SendMailService';

class SendMailConroller{

    async execute(request: Request, response: Response){
        console.log(request.body)
        const{email, survey_id} = request.body;

        const usersRepository = getCustomRepository( UsersRepository )
        const surveysRepository = getCustomRepository( SurveyRepository )
        const surveysUsersRepository = getCustomRepository( SurveysUsersRepository )

        //Verifica se emai fornecido existe
        const user =  await usersRepository.findOne( {email} )
        if( !user ){
            return response.status(400).json({
                error: "User does not exists "
            })
        }

        const survey = await surveysRepository.findOne( {id: survey_id})
        if( !survey ){
            return response.status(400).json({
                error: "Survey doesnot exists"
            })
        }

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            user_id: user.id,
            link: process.env.URL_MAIL
        }

        const npsPath = resolve(__dirname, "..", "views", "emails", "npsMails.hbs")


        const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
            where: [{user_id: user.id}, {value: null}],
            relations: ["user", "survey"]
        })

        if(surveyUserAlreadyExists){
            await SendMailService.execute(email, survey.title, variables, npsPath)
            return response.json(surveyUserAlreadyExists)
        }

        //Salvar informações
        const surveyUser = surveysUsersRepository.create({
            user_id: user.id,
            survey_id
        })

        await surveysUsersRepository.save( surveyUser )
        
        //Enviar email  para usuário
        await SendMailService.execute(
            email, 
            survey.title,
            variables,
            npsPath
        )

        return response.json( surveyUser )
    }

}

export { SendMailConroller }