
import {Request, Response}  from 'express'
import { getRepository } from 'typeorm'
import { User } from '../models/User'

class UserController{

    async create(request: Request, response: Response){

        /** Desestrutura os dados da vindos na 
         *  requisição. */
        const {name,email} = request.body 


        /** Guarda todos os registros de usuário 
         *  em um único repositorio */
        const usersRepository = getRepository(User)


        /** Procura por algum usuário que já cadastrado 
         * com o email fornecido */
        const userAlreadyExists = await usersRepository.findOne({
            email
        })


        /** Verifica se já existe algum usuário com o email
         *  fornecido e retorna erro caso exista */
        if( userAlreadyExists ){
            return response.status(400).json({
                error: "User already exists"
            })
        }
        
        
        /** Cria o novo usuário no banco */
        const user = usersRepository.create({
            name, email
        })

        /**  Salva o novo usuário no repositório */
        await usersRepository.save( user )

        /** Retorna todas informações do usuário caso 
         *  seja salvo com sucesso */
        return response.json(  user )
    }
}

export {UserController}