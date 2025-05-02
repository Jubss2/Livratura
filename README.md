# 📚 Livratura
  
Projeto open-source com backend em Prisma + Docker e frontend em React feita como parte da avaliação da matéria de Desenvolvimento de Projeto de Software.

**www.livratura.com.br**

## 🧠 Sobre o projeto

**Livratura** é uma plataforma voltada para leitores que desejam transformar o hábito de leitura em uma jornada mais divertida e desafiadora fe. A proposta é gamificar o processo de leitura com:

-  Desafios literários (ex: um livro por país, por estado do Brasil, ou por tema).
-  Coleções criadas por usuários ou pela própria plataforma.
-  Avaliações com notas e resenhas para promover a troca de opiniões.
-  Metas de leitura personalizadas (diárias, semanais, anuais).

## ✨ Funcionalidades

- Criação e participação em **desafios de leitura**.
- Organização de **coleções temáticas**.
- Sistema de **reviews e notas** para os livros.
- Definição de **metas de leitura**.
- Perfis de usuários com histórico e progresso.
- Grupos de leitura com coleções compartilhadas.

## 👤 Público-alvo

- Jovens e adultos que querem aumentar seu repertório literário.
- Leitores em busca de incentivo, organização e novas descobertas.
- Pessoas interessadas em gamificação da leitura.

## 🛠️ Tecnologias utilizadas

### Backend
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

### Frontend
- [React](https://reactjs.org/)

- Licença [MIT](LICENSE)

## 📦 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/Jubss2/Livratura.git
cd Livratura

# Suba o ambiente com Docker
docker-compose up --build

# Prisma Studio - caso queira acessar o banco de dados
npx prisma studio 
http://localhost:5555


