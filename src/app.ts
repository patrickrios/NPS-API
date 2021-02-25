import 'reflect-metadata'
import express, { request, response } from 'express'
import createConnection from './database'
import { router } from './router'

createConnection()

const app = express()

// Recebe o body da requisição em formato JSON
app.use( express.json() )

// Define as rotas definidas no arquivo router
app.use(  router )

export { app }