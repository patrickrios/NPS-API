<img src="https://ik.imagekit.io/lrjseyuxi3m/Nps-cover_R5R5pg5y5.png" align="center">


## Índice
- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Baixar e instalar](#-baixar-e-instalar-o-projeto)
- [Agradecimentos](#-agradecimentos)


## 📝 Sobre
NPS é uma API para criar **pesquisas** de satisfação do consumidor. Com ela é possível **enviar pesquisas** por e-mail para **usuários cadastrados** e salvar sua **resposta**.


## 🚀 Tecnologias
* NodeJS
* Typescript
* TypeORM
* Jest


## Funcionalidades
* Cadastrar novo usuário
  ```json
    {
        "user": "Nome do usuário",
        "email": "email_do_usuario@exemplo.com"
    }    
  ```
  ```
    Method: POST 
    Route: /users 
  ```

* Cadastrar nova pesquisa
    ```json
    {
	    "title": "Queremos ouvir sua opnião",
	    "description": "de 0 a 10, quanto você nos avalia?"
    }
    ```
  ```
    Method: POST
    Route: /surveys
  ```

* Enviar pesquisa para usuário
    ```json
    {
	    "email": "name@email.com",
	    "survey_id": "2b5398d9-84f9-4734-94ce-174a6a5c685e"
    }
    ```
  ```
    Method: POST
    Route: /sendMail
  ```


## 📦 Baixar e instalar o projeto
```bash
    # Copiando o projeto
    $ git clone https://github.com/patrickrios/NPS-API
```
```bash
    # Mudando para o diretório do projeto
    $ cd NPS-API
```
```bash
    # Instalando o projeto
    $ yarn install
```
```bash
    # Iniciando a aplicação
    $ yarn dev
```


## Agradecimentos
Este projeto foi desenvolvido durante a semana NLW4 promovido pela [Rocketseat](https://rocketseat.com.br/).

[<img src="https://avatars.githubusercontent.com/u/5041791?s=460&u=7261e439282198ba0ce42fcfc619631fe989f58c&v=4" width=115 > <br> <sub> Dani Leão (Instrutora) </sub>](https://github.com/danileao) | [<img src="https://avatars.githubusercontent.com/u/28929274?s=200&v=4" width=115 > <br> <sub> Rocketseat (Plataforma) </sub>](https://github.com/Rocketseat) |
| :---: | :---: |