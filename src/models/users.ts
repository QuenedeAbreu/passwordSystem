'use strict';
import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../db/mysql';

export interface IUser extends Model {
  id_user: string;
  name: string;
  username: string;
  email: string;
  email_verified_at?: Date;
  password: string;
  remember_token?: string;
  guid?: string;
  domain?: string;
}

export const User = sequelize.define<IUser>('users', {
  id_user: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email_verified_at: {
    type: DataTypes.DATE,
    allowNull: true,

  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  remember_token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  guid: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  domain: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'users',
  timestamps: true
})