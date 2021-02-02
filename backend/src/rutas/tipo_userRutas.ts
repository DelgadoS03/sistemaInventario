import {Router} from 'express';
import tipo_userControlador from '../controladores/tipo_usercontrolador';

class Tipo_userRutas{

    public ruta: Router =Router();
    
    constructor(){
        this.config();
    }

    config():void{
        //ruta para listar los tipos de usuarios
        this.ruta.get('/list',tipo_userControlador.list);
        //ruta para observar/listar un solo tipo de usuario
        this.ruta.get('/list/:id',tipo_userControlador.listOne)
        //ruta para agregar un tipo de usuario
        this.ruta.post('/add',tipo_userControlador.add);
        //Ruta para actualizar/editar un tipo de usuario
        this.ruta.put('/edit/:id',tipo_userControlador.update)
        //Ruta para eliminar un tipo de usuario
        this.ruta.delete('/delete/:id',tipo_userControlador.delete)
    }

}

const tipo_userRutas = new Tipo_userRutas();
export default tipo_userRutas.ruta;