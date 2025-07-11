# Livratura
Este projeto é uma aplicação full stack dividida em duas pastas principais, com o objetivo de criar um projeto, chamado Livratura que seja uma comunidade para leitores, com o foco em descoberta de novos livros para se ler pela criação de coleções de temas específicos :

📦 Backend 

API RESTful desenvolvida com Node.js, Express e Prisma ORM, utilizando JWT para autenticação. Com está estrutura: 

Controllers – lógica de entrada e saída de dados

Repositories – camada de acesso ao banco com Prisma

Middlewares – autenticação via JWT

Routes – definição das rotas da API

Swagger – documentação automática das rotas via OpenAPI

💻 Frontend

Aplicação cliente desenvolvida em React, conectando-se ao backend via chamadas HTTP autenticadas com JWT. Funcionalidades:

Tela de Login com autenticação JWT

Interface para inserção, edição, exclusão e listagem para lidar com a coleção de livros.

Consumo de rotas protegidas do backend

🚀 Tecnologias utilizadas
Backend: Node.js, Express, Prisma, PostgreSQL, JWT, Swagger

Frontend: React, Axios, React Router

✅ Funcionalidades principais
Autenticação de usuários com token JWT

CRUD completo para uma entidade de domínio

Documentação via Swagger acessível na API
