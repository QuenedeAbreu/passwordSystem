'use strict';

import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../db/mysql';

export interface IPerfis extends Model {
  id_permission: string;
  permission_name: string;
  status_permission: boolean;
}

export const Perfis = sequelize.define<IPerfis>('perfis', {
    id_perfil: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      // autoIncrement: true
       unique: true
    },
    perfil_name: {
      type: DataTypes.STRING,
      allowNull: false
      },
    status_permission:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
      }
   
}, {
  tableName: 'perfis',
  timestamps: true
});