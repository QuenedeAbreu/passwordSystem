import  express,{Request, Response}  from "express";
import {sequelize} from './db/myql';
const app = express();

sequelize.authenticate().then(() => {
  console.log('Conexão com o banco de dados realizada com sucesso!');
}).catch((err: Error) => {
  console.log('Erro ao conectar com o banco de dados: ', err);
})

app.get('/', (req: Request, res: Response) => {
  res.send('Olá mundo!');
});

export default app;