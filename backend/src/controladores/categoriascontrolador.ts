import { Request, Response } from "express";
const categoriaData = require('../data/categoria/index');


class CategoriasControlador{

    //Metodo para listar las categorias
     public async list(req:Request, res:Response): Promise<void>{
        try {
            const listC = await categoriaData.getCategoria();
          res.send(listC);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }


    //Metodo para ver una sola categoria
    public async listOne(req:Request,res:Response):Promise<any>{
        try {
            const id = req.params.id;
            const listOne = await categoriaData.getOneCategoria(id);
            res.send(listOne);
        } catch (error) {
            res.status(400).send(error.message);
        }
    //const categoria= await pool.query('select categoria.nombre from articulo inner join categoria on articulo.id_art= ? && articulo.categoria_fk=categoria.id_cat',[id]);
    }

    
    //Metodo para agregar una categoria
    public async add(req:Request, res:Response): Promise<void>{
        try {
            const data = req.body;
            const addCat = await categoriaData.createCategoria(data);
            res.send(addCat);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    //Metodo para editar/actualizar una categoria
    public async update(req:Request, res: Response):Promise<void>{
        try {
            const id = req.params.id;
            const data = req.body;
            const updateCat = await categoriaData.updateCategoria(id,data);
            res.send(updateCat);
        } catch (error) {
            res.status(400).send(error.message);
        }
    } 

    //Metodo para eliminar una categoria
    public async delete(req:Request, res: Response):Promise<void>{
        try {
            const id = req.params.id;
            const deleteCat = await categoriaData.deleteCategoria(id);
            res.json({text:'Articulo Eliminado'});
            res.send(deleteCat);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

const categoriaControlador = new CategoriasControlador();

export default categoriaControlador;