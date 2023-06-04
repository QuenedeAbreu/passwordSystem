'use strict';

import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../db/mysql';

export interface IPermissions extends Model {
  id_permission: string;
  permission_name: string;
  status: number;
  description: string;
}

export const Permissions = sequelize.define<IPermissions>('permissions', {
    id_permission: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      // autoIncrement: true
       unique: true
    },
    permission_name: {
      type: DataTypes.STRING,
      allowNull: false
      },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      }
}, {
  tableName: 'permissions',
  timestamps: true
});