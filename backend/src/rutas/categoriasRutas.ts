import {Router} from 'express';
import categoriasControlador from '../controladores/categoriascontrolador';

class CategoriasRutas{

    public ruta: Router =Router();
    
    constructor(){
        this.config();
    }

    config():void{
        //ruta para listar las categorias
        this.ruta.get('/list',categoriasControlador.list);
        //ruta para observar/listar una sola categoria
        this.ruta.get('/list/:id',categoriasControlador.listOne)
        //ruta para agregar categoria
        this.ruta.post('/add',categoriasControlador.add);
        //Ruta para actualizar/editar una categoria
        this.ruta.put('/edit/:id',categoriasControlador.update)
        //Ruta para eliminar una categoria
        this.ruta.delete('/delete/:id',categoriasControlador.delete)
    }

}

const categoriaRutas = new CategoriasRutas();
export default categoriaRutas.ruta;