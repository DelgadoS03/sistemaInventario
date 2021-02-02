import { Request, Response } from "express";

const articuloData = require('../data/articulo/index');

class ArticulosControlador{

    //Metodo para listar articulos
    public async list(req:Request, res:Response): Promise<void>{
        try {
            const articulo = await articuloData.getArticulo();
          res.send(articulo);

        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    
    //Metodo para ver un solo articulo
    public async listOne(req:Request,res:Response):Promise<any>{
        try {
            const idArt = req.params.id;
            const articulo = await articuloData.getOneArticulo(idArt);
            res.send(articulo);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    //Metodo para agregar un articulo
    public async add(req:Request, res:Response): Promise<any>{
        try {
            const data = req.body;
            const addArt = await articuloData.createArticulo(data);
            res.send(addArt);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    //Metodo para editar/actualizar articulo
    public async update(req:Request, res: Response):Promise<void>{
        try {
            const idArt= req.params.id;
            const data = req.body;
            const updateArt = await articuloData.updateArticulo(idArt,data);
            res.send(updateArt);
        } catch (error) {
            res.status(400).send(error.message);
        }

    } 
        
    //Metodo para eliminar un articulo
    public async delete(req:Request, res: Response):Promise<void>{
      try {
          const idArt = req.params.id;
          const deleteArt = await articuloData.deleteArticulo(idArt);
          res.json({text:'Articulo Eliminado'});
          res.send(deleteArt);
      } catch (error) {
          res.status(400).send(error.message);
      }  
    }

}

const articulosControlador = new ArticulosControlador();

export default articulosControlador;