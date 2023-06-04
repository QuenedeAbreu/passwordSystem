import  express from "express";
import {sequelize} from './db/mysql';
import router from './router';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.authenticate().then(() => {
  console.log('Conexão com o banco de dados realizada com sucesso!');
}).catch((err: Error) => {
  console.log('Erro ao conectar com o banco de dados: ', err);
})

app.use('/api',router);

export default app;