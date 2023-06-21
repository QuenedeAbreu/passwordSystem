import {Request,Response} from 'express';
import {IPerfis,Perfis} from '../../models/perfis';

export const getAllPerfis = async (req:Request,res:Response) => {
   try {
     const perfis : IPerfis[] = await Perfis.findAll();
     res.status(200).json(perfis);
    
   } catch (error) {
    console.log(error);
    res.status(500).json({msg:'Erro ao listar os perfis! - ',error});    
   }
}

export const createPerfis = async (req:Request,res:Response) => {
  const {perfil_name,status_perfil} = req.body;
   try {
    const result_find_perfil_name : IPerfis[] = await Perfis.findAll({where:{perfil_name}}); 
    if(result_find_perfil_name){
      res.status(400).json({msg:'Perfil já cadastrado!'});
      return;
    }
    if( perfil_name == null || perfil_name == undefined || perfil_name == ''){
      res.status(400).json({msg:'Nome do perfil é obrigatário!'});
      return;
    }
     const perfis : IPerfis = await Perfis.create({perfil_name,status_perfil});
     res.status(200).json(perfis);
    
   } catch (error) {
    console.log(error);
    res.status(500).json({msg:'Erro ao criar perfis! - ',error});    
   }
}