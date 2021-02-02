import { Request, Response } from "express";
const departamentoData = require('../data/departamento/index');


class DepartamentosControlador{

    //Metodo para listar los departamentos
     public async list(req:Request, res:Response): Promise<void>{
        try {
            const list = await departamentoData.getDepartamento();
          res.send(list);

        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    //Metodo para ver una sola categoria
    public async listOne(req:Request,res:Response):Promise<any>{
        try {
            const id = req.params.id;
            const listOne = await departamentoData.getOneDepartamento(id);
            res.send(listOne);
        } catch (error) {
            res.status(400).send(error.message);
        }
    //const categoria= await pool.query('select categoria.nombre from articulo inner join categoria on articulo.id_art= ? && articulo.categoria_fk=categoria.id_cat',[id]);
    }
    
    //Metodo para agregar un departamento
    public async add(req:Request, res:Response): Promise<void>{
        try {
            const data = req.body;
            const insert = await departamentoData.createDepartamento(data);
            res.send(insert);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    
    //Metodo para editar/actualizar un departamento
    public async update(req:Request, res: Response):Promise<void>{
        try {
            const id = req.params.id;
            const data = req.body;
            const updateDep = await departamentoData.updateDepartamento(id,data);
            res.send(updateDep);
        } catch (error) {
            res.status(400).send(error.message);
        }
    } 

    //Metodo para eliminar un departamento
    public async delete(req:Request, res: Response):Promise<void>{
        try {
            const id = req.params.id;
            const deleteDep = await departamentoData.deleteDepartamento(id);
            res.json({text:'Departamento Eliminado'});
            res.send(deleteDep);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

const departamentoControlador = new DepartamentosControlador();

export default departamentoControlador;