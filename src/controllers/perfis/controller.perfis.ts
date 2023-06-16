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