import { Request, Response } from "express";

const personaData = require('../data/persona/index');

class PersonaControlador{

    //Metodo para listar persona
    public async list(req:Request, res:Response): Promise<void>{
        try {
            const personalist = await personaData.getPersona();
          res.send(personalist);

        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    
    //Metodo para ver una sola persona
    public async listOne(req:Request,res:Response):Promise<any>{
        try {
            const id = req.params.id;
            const personaOne = await personaData.getOnePersona(id);
            res.send(personaOne);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    //Metodo para agregar una persona
    public async add(req:Request, res:Response): Promise<any>{
        try {
            const data = req.body;
            const personaAdd = await personaData.createPersona(data);
            res.send(personaAdd);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    //Metodo para editar/actualizar una persona
    public async update(req:Request, res: Response):Promise<void>{
        try {
            const id= req.params.id;
            const data = req.body;
            const personaUpdate = await personaData.updatePersona(id,data);
            res.send(personaUpdate);
        } catch (error) {
            res.status(400).send(error.message);
        }

    } 
        
    //Metodo para eliminar una persona
    public async delete(req:Request, res: Response):Promise<void>{
      try {
          const id = req.params.id;
          const personaDelete = await personaData.deletePersona(id);
          res.json({text:'Datdo Eliminado'});
          res.send(personaDelete);
      } catch (error) {
          res.status(400).send(error.message);
      }  
    }

}

const personaControlador = new PersonaControlador();

export default personaControlador;