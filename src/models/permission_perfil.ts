'use strict';

import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../db/mysql';
import {IPermissions,Permissions} from './permissions';
import {IPerfis,Perfis} from './perfis';

export interface IPermission_perfil extends Model {
  id_permission_perfil: string;
  data_cadastro: Date;
  id_permission:string;
  id_perfil:string;
}

export const Permission_perfil = sequelize.define<IPermission_perfil>('permission_perfil', {
    id_permission_perfil: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      // autoIncrement: true
       unique: true
    }   
}, {
  tableName: 'permission_perfil',
  timestamps: true
});

Permissions.belongsToMany(Perfis,{
  through:{
    model:Permission_perfil
  },
  foreignKey:'id_permission',
  constraints:true
});

Perfis.belongsToMany(Permissions,{
  through:{
    model:Permission_perfil
  },
  foreignKey:'id_perfil',
  constraints:true
});