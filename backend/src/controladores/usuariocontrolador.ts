import { Request, Response } from "express";

const userData = require('../data/usuario/index');

class UserControlador{

    //Metodo para listar usuarios
    public async list(req:Request, res:Response): Promise<void>{
        try {
            const userlist = await userData.getUser();
          res.send(userlist);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    
    //Metodo para ver un solo usuario
    public async listOne(req:Request,res:Response):Promise<any>{
        try {
            const id = req.params.id;
            const userOne = await userData.getOneUser(id);
            res.send(userOne);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    //Metodo para agregar un usuario
    public async add(req:Request, res:Response): Promise<any>{
        try {
            const data = req.body;
            const userAdd = await userData.createUser(data);
            res.send(userAdd);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    //Metodo para editar/actualizar un usuario
    public async update(req:Request, res: Response):Promise<void>{
        try {
            const id= req.params.id;
            const data = req.body;
            const userUpdate = await userData.updateUser(id,data);
            res.send(userUpdate);
        } catch (error) {
            res.status(400).send(error.message);
        }

    } 
        
    //Metodo para eliminar un usuario
    public async delete(req:Request, res: Response):Promise<void>{
      try {
          const id = req.params.id;
          const userDelete = await userData.deleteUser(id);
          res.json({text:'Usuario Eliminado'});
          res.send(userDelete);
      } catch (error) {
          res.status(400).send(error.message);
      }  
    }

}

const userControlador = new UserControlador();

export default userControlador;