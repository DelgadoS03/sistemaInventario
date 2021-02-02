import {Router} from 'express';
import resguardoControlador from '../controladores/resguardocontrolador';

class ResguardoRutas{

    public ruta: Router =Router();
    
    constructor(){
        this.config();
    }

    config():void{
        //ruta para listar resguardo 
        this.ruta.get('/list',resguardoControlador.list);
        //ruta para observar/listar un solo resguardo
        this.ruta.get('/list/:id',resguardoControlador.listOne)
        //ruta para agregar un solo resguardo
        this.ruta.post('/add',resguardoControlador.add);
        //Ruta para actualizar/editar un solo resguardo
        this.ruta.put('/edit/:id',resguardoControlador.update)
        //Ruta para eliminar un resguardo
        this.ruta.delete('/delete/:id',resguardoControlador.delete)
    }

}

const resguardoRutas = new ResguardoRutas();
export default resguardoRutas.ruta;