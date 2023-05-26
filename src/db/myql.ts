import  {Sequelize}  from "sequelize";

export const sequelize = new Sequelize(
  'password_system',
  'root',
  '@Quenede1393',
  {
    host: 'mysqldb',
    port: 3306,
    dialect: 'mysql',
  }
)