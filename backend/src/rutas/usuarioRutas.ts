import {Router} from 'express';
import userControlador from '../controladores/usuariocontrolador';

class UserRutas{

    public ruta: Router =Router();
    
    constructor(){
        this.config();
    }

    config():void{
        //ruta para listar usuarios 
        this.ruta.get('/list',userControlador.list);
        //ruta para observar/listar un solo usuario
        this.ruta.get('/list/:id',userControlador.listOne)
        //ruta para agregar un usuario
        this.ruta.post('/add',userControlador.add);
        //Ruta para actualizar/editar un usuario
        this.ruta.put('/edit/:id',userControlador.update)
        //Ruta para eliminar un usuario
        this.ruta.delete('/delete/:id',userControlador.delete)
    }

}

const userRutas = new UserRutas();
export default userRutas.ruta;