# Next Events

Next Events é um projeto do curso - Next.js & React - The Complete Guide (incl. Two Paths!) - realizado pela Academind na plataforma Udemy.
É possível visualizar uma versão online do programa em [ssc-nextevents.vercel.app](https://ssc-nextevents.vercel.app/).
Neste projeto foi exercitado as features do Framework NextJS, como Server-Side Reendering, Pre-Rendering, Data Fetching, File-based Routing.

## Rodar Localmente

Para Rodar o programa localmente, é necessário criar um Banco de dados MongoDB. 
Depois criar um arquivo `.env.local` contendo as variáveis de ambiente necessárias:
```
REACT_APP_MONGODB_USERNAME = <Nome do usuário do banco de dados criado no MongoDB>
REACT_APP_MONGODB_PASSWORD = <Senha do usuário>
REACT_APP_MONGODB_DBNAME = <Nome do Banco de Dados>
```

Agora, basta iniciar o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

ou fazer a build e executar:

```bash
npm run build && npm run start
# or
yarn build && yarn start
```

## Tecnologias Utilizadas:

 - NextJS ;
 - React;
 - Typescript;
 - MongoDB;
 - CSS Modules;
 - SASS.