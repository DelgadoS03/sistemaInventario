import {Router} from 'express';
import departamentoControlador from '../controladores/departamentocontrolador';

class DepartamentosRutas{

    public ruta: Router =Router();
    
    constructor(){
        this.config();
    }

    config():void{
        //ruta para listar los departamentos
        this.ruta.get('/list',departamentoControlador.list);
        //ruta para observar/listar un solo departamento
        this.ruta.get('/list/:id',departamentoControlador.listOne)
        //ruta para agregar un departamento
        this.ruta.post('/add',departamentoControlador.add);
        //Ruta para actualizar/editar un departamento
        this.ruta.put('/edit/:id',departamentoControlador.update)
        //Ruta para eliminar un departamento
        this.ruta.delete('/delete/:id',departamentoControlador.delete)
    }

}

const departamentoRutas = new DepartamentosRutas();
export default departamentoRutas.ruta;