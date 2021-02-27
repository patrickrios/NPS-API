import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import "express-async-errors"
import createConnection from './database'
import { router } from './router'
import { AppErrors } from './errors/AppErrors'

createConnection()

const app = express()

// Recebe o body da requisição em formato JSON
app.use( express.json() )

// Define as rotas definidas no arquivo router
app.use(  router )

app.use((err: Error, request: Request, response: Response, next: NextFunction) =>{
    if( err instanceof AppErrors){
        return response.status( err.statusCode ).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`
    })
})

export { app }