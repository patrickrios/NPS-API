import request from 'supertest'
import { getConnection } from 'typeorm'
import { app } from '../app'

import createConnection from '../database'

describe('Surveys', () => {
    beforeAll( async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll( async ()=>{
        const conn = getConnection()
        await conn.dropDatabase()
        await conn.close()
    } )

    it("Should be able to create a new survey", async() => {
        const response = await request(app).post('/surveys')
        .send({
            title: "Title example",
            description: "Description"
        })
        expect( response.status ).toBe(201)
        expect( response.body ).toHaveProperty("id")
    })

    it("Should be able to get all surveys", async() => {
        await request(app).post('/surveys')
        .send({
            title: "Title example2",
            description: "Description exemple2"
        })
        
        const response = await request(app).get("/surveys")
        expect(response.body.length).toBe(2)
        
    })

})
