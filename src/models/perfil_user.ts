'use strict';

import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../db/mysql';
import {User} from './users';
import {Perfis} from './perfis';

export interface IPerfil_user extends Model {
  id_permission_perfil: string;
  data_cadastro: Date;
  id_permission:string;
  id_perfil:string;
}

export const Perfil_user = sequelize.define<IPerfil_user>('perfil_user', {
    id_perfil_user: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      // autoIncrement: true
       unique: true
    }   
}, {
  tableName: 'perfil_user',
  timestamps: true
});

User.belongsToMany(Perfis,{
  through:{
    model:Perfil_user
  },
  foreignKey:'id_user',
  constraints:true
});

Perfis.belongsToMany(User,{
  through:{
    model:Perfil_user
  },
  foreignKey:'id_perfil',
  constraints:true
});