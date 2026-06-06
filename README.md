# 🎬 CINELOSOFIA - Portal do Clube de Cinema e Filosofia

Portal web do **Clube de Cinema e Filosofia** do IFC - Campus Sombrio. Plataforma para gerenciar sessões de filmes, discussões filosóficas e acervos do clube.

## 📋 Sobre o Projeto

CINELOSOFIA é um clube criado em 2024 que realiza encontros semanais com sessões de filmes seguidas de discussões filosóficas sobre as obras. Este projeto web oferece um espaço digital para que membros acessem informações sobre próximos encontros, acervos de filmes e um sistema de gerenciamento de usuários.

## 🎨 Seções do Site

- **Home** - Página inicial com apresentação do clube
- **Quem Somos** - História e informações sobre CINELOSOFIA
- **Próximo Encontro** - Detalhes do próximo filme a ser exibido
- **Acervos** - Galeria de filmes e curtametragens do clube
- **Contato** - Informações de contato

## 🛠️ Tecnologias Utilizadas

**Frontend:**
- React
- CSS3 (Custom Properties, Flexbox, Grid)
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB

**Banco de Dados:**
- MongoDB

## 📦 Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- MongoDB configurado

### Instalação

1. Acesse a pasta do cliente:
```bash
cd client
npm install
```

2. Acesse a pasta do servidor:
```bash
cd server
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env` do servidor:
```
PORT=5000
MONGODB_URI=seu_uri_do_mongodb
```

### Executar

**Frontend:**
```bash
cd client
npm start
```

**Backend:**
```bash
cd server
npm start
```

O site estará disponível em `http://localhost:3000`

## 📧 Contato

- **Email:** popphilo@ifc.edu.br
- **Telefone:** +55 (48) 9999-xxxx
- **Instagram:** @popphilo_ifc

## 📅 Estrutura de Pastas

```
tcc/
├── client/               # Frontend React
│   ├── public/          # Arquivos estáticos
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas
│   │   ├── styles/      # Arquivos CSS
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/              # Backend Node.js
│   ├── routes/          # Rotas da API
│   ├── db/              # Configuração do banco
│   ├── server.js
│   └── package.json
└── README.md
```

---

Desenvolvido para o TCC de Cinema e Filosofia do IFC - Campus Sombrio

Altere o nome do banco de dados em`server/db/conn.js` para o seu:

``` 
  _db = client.db("test") 
```
Inicie o servidor

```bash
  cd server
  node server.js
```
Inicie o Cliente

```bash
  cd client
  npm start
```
  

## Funcionalidades do projeto

- O usuário pode **Criar** informações de um usuário e gerenciá-las.

- **Exibição** das informações dos usuários, incluindo nome, nome de usuário, e-mail e função.

- Ações **Alterar** and **Excluir** também estão disponíveis.

## Saiba mais

**FrontEnd**

* Para aprender React, consulte a [React documentation](https://reactjs.org/).

* Veja também a [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

* Comece com o [Bootstrap](https://www.w3schools.com/bootstrap5/index.php), o framework mais popular para construção de sites responsivos e mobile-first.

**BackEnd**

* [Node.js Tutorial](https://www.w3schools.com/nodejs/default.asp)

* [ExpressJS Tutorial](https://www.tutorialspoint.com/expressjs/index.htm)

**Database**

* [MongoDB Tutorial](https://www.w3schools.com/mongodb/)

* Siga o guia [Get Started with MongoDB Atlas](https://www.mongodb.com/docs/atlas/getting-started/) para criar um cluster, conectar-se a ele e carregar seus dados.

**Fullstack**

* Aprenda tudo sobre o [MERN stack](https://www.mongodb.com/languages/mern-stack-tutorial) com este guia passo a passo para desenvolver uma aplicação CRUD simples do zero.

## Aplicação Online

<a href="#">Live fullstack MERN app</a>