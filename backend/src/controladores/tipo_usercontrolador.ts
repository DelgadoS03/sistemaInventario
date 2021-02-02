import { Request, Response } from "express";
const tipo_userData = require('../data/tipo_user/index');


class Tipo_userControlador{

    //Metodo para listar los tipos de usuarios
     public async list(req:Request, res:Response): Promise<void>{
        try {
            const listT = await tipo_userData.getTipo_user();
          res.send(listT);

        } catch (error) {
            res.status(400).send(error.message);
        }
    }


    //Metodo para ver un solo tipo de usuario
    public async listOne(req:Request,res:Response):Promise<any>{
        try {
            const id = req.params.id;
            const listOne = await tipo_userData.getOneTipo_user(id);
            res.send(listOne);
        } catch (error) {
            res.status(400).send(error.message);
        }
    //const categoria= await pool.query('select categoria.nombre from articulo inner join categoria on articulo.id_art= ? && articulo.categoria_fk=categoria.id_cat',[id]);
    }

    
    //Metodo para agregar un tipo de usuario
    public async add(req:Request, res:Response): Promise<void>{
        try {
            const data = req.body;
            const addT = await tipo_userData.createTipo_user(data);
            res.send(addT);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    //Metodo para editar/actualizar un tipo de usuario
    public async update(req:Request, res: Response):Promise<void>{
        try {
            const id = req.params.id;
            const data = req.body;
            const updateT = await tipo_userData.updateTipo_user(id,data);
            res.send(updateT);
        } catch (error) {
            res.status(400).send(error.message);
        }
    } 

    //Metodo para eliminar un tipo de usuario
    public async delete(req:Request, res: Response):Promise<void>{
        try {
            const id = req.params.id;
            const deleteT = await tipo_userData.deleteTipo_user(id);
            res.json({text:'tipo user Eliminado'});
            res.send(deleteT);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

const tipo_userControlador = new Tipo_userControlador();

export default tipo_userControlador;