import {Request,Response} from 'express';
import {IPermissions,Permissions} from '../../models/permissions';


export const getAllPermissions = async (req:Request,res:Response)   =>{
  try {
    const permissions : IPermissions[] = await Permissions.findAll();
    res.status(200).json(permissions);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:'Erro ao listar permissães! - ',error});
}}

export const createPermission = async (req:Request,res:Response)   =>{
    const {permission_name,status, description} = req.body;

    try {
      const getOnePermission : IPermissions | null = await Permissions.findOne({where:{permission_name}});
      if(getOnePermission){
        res.status(400).json({msg:'Já existe uma permissão com esse nome!'});
      }else{
        const permission : IPermissions = await Permissions.create({permission_name,status, description});
        res.status(201).json(permission);
      }
    }
     catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Erro ao inserir essa permissão! - ', error});
      }
    }

export const getOnePermission = async (req:Request,res:Response)   =>{
  const {id} = req.params;
  try {
    const permission : IPermissions | null = await Permissions.findByPk(id);
    if(permission){
      res.status(200).json(permission);
    }else{
      res.status(400).json({msg:'Permissão não encontrada!'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:'Erro ao listar permissão! - ',error});
  }
}

export const updatePermission = async (req:Request,res:Response)   =>{
  const {id} = req.params;
  const {permission_name,status, description} = req.body;

  try {
    const permission : IPermissions | null = await Permissions.findByPk(id);
    if(permission){
      await permission.update({permission_name,status, description});
      res.status(200).json(permission);
    }else{
      res.status(400).json({msg:'Permissão não encontrada!'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:'Erro ao atualizar permissão! - ',error});
  }
}

