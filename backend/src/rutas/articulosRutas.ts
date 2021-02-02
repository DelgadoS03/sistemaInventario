import {Router} from 'express';
import articulosControlador from '../controladores/articuloscontrolador';

class ArticulosRutas{

    public ruta: Router =Router();
    
    constructor(){
        this.config();
    }

    config():void{
        //ruta para listas 
        this.ruta.get('/list',articulosControlador.list);
        //ruta para observar/listar un solo articulo
        this.ruta.get('/list/:id',articulosControlador.listOne)
        //ruta para agregar articulo
        this.ruta.post('/add',articulosControlador.add);
        //Ruta para actualizar/editar un articulo
        this.ruta.put('/edit/:id',articulosControlador.update)
        //Ruta para eliminar
        this.ruta.delete('/delete/:id',articulosControlador.delete)
    }

}

const articuloRutas = new ArticulosRutas();
export default articuloRutas.ruta;