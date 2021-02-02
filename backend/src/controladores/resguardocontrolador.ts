import { Request, Response } from "express";

const resguardoData = require('../data/resguardo/index');

class ResguardoControlador{

    //Metodo para listar resguardos
    public async list(req:Request, res:Response): Promise<void>{
        try {
            const resguardolist = await resguardoData.getResguardo();
          res.send(resguardolist);

        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    
    //Metodo para ver un solo resguardo
    public async listOne(req:Request,res:Response):Promise<any>{
        try {
            const id = req.params.id;
            const resguardoOne = await resguardoData.getOneResguardo(id);
            res.send(resguardoOne);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    //Metodo para agregar un resguardo
    public async add(req:Request, res:Response): Promise<any>{
        try {
            const data = req.body;
            const resguardoAdd = await resguardoData.createResguardo(data);
            res.send(resguardoAdd);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    //Metodo para editar/actualizar un resguardo
    public async update(req:Request, res: Response):Promise<void>{
        try {
            const id= req.params.id;
            const data = req.body;
            const resguardoUpdate = await resguardoData.updateResguardo(id,data);
            res.send(resguardoUpdate);
        } catch (error) {
            res.status(400).send(error.message);
        }

    } 
        
    //Metodo para eliminar un resguardo
    public async delete(req:Request, res: Response):Promise<void>{
      try {
          const id = req.params.id;
          const resguardoDelete = await resguardoData.deleteResguardo(id);
          res.json({text:'resguardo Eliminado'});
          res.send(resguardoDelete);
      } catch (error) {
          res.status(400).send(error.message);
      }  
    }

}

const resguardoControlador = new ResguardoControlador();

export default resguardoControlador;