import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'
import * as yup from 'yup'
import { AppErrors } from '../errors/AppErrors'

class UserController{

    async create(request: Request, response: Response){

        /** Desestrutura os dados da vindos na 
         *  requisição. */
        const {name, email} = request.body 

        const schema = yup.object().shape({
            name: yup.string().required("Name is mandatory"),
            email: yup.string().email().required("Email is mandatory")
        })

        try {
            await schema.validate( request.body, {abortEarly: false} )            
        } 
        catch (err) {
            throw new AppErrors(err)
        }

        /** Guarda todos os registros de usuário 
         *  em um único repositorio */
        const usersRepository = getCustomRepository( UsersRepository )


        /** Procura por algum usuário que já cadastrado 
         * com o email fornecido */
        const userAlreadyExists = await usersRepository.findOne({
            email
        })


        /** Verifica se já existe algum usuário com o email
         *  fornecido e retorna erro caso exista */
        if( userAlreadyExists ){
            throw new AppErrors("User already exists")
        }
        
        
        /** Cria o novo usuário no banco */
        const user = usersRepository.create({
            name, email
        })

        /**  Salva o novo usuário no repositório */
        await usersRepository.save( user )

        /** Retorna todas informações do usuário caso 
         *  seja salvo com sucesso */
        return response.status(201).json(  user )
    }
}

export { UserController }
