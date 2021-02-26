import { app } from "./app";

// Roda o servidor ao executar 'yarn dev'
app.listen(3000, ()=> console.log('server is running...'))





/**
 * AULA 01
 * 
 * GET  -> Busca
 * POST -> Salvar informação
 * PUT  -> Alterar informação
 * DELETE -> Deletar
 * PATCH -> Alteração específica
*/

//http://localhost:3333/users/
//app.get("/users", (request, reponse) =>{
//    return reponse.json({message: 'Hello world nlw4'})
//})

// 1 param: Rota(Recurso)
// 2 param: request, response
//app.post("/", (request, response) =>{
//    //Recebeu os dados para salvar
//    return response.json({message: 'Os dados foram salvos com sucesso¹'})
//})

