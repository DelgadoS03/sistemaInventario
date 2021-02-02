import {Router} from 'express';
import personaControlador from '../controladores/personacontrolador';

class PersonaRutas{

    public ruta: Router =Router();
    
    constructor(){
        this.config();
    }

    config():void{
        //ruta para listar personas 
        this.ruta.get('/list',personaControlador.list);
        //ruta para observar/listar una sola persona
        this.ruta.get('/list/:id',personaControlador.listOne)
        //ruta para agregar una persona
        this.ruta.post('/add',personaControlador.add);
        //Ruta para actualizar/editar una sola persona
        this.ruta.put('/edit/:id',personaControlador.update)
        //Ruta para eliminar una persona
        this.ruta.delete('/delete/:id',personaControlador.delete)
    }

}

const personaRutas = new PersonaRutas();
export default personaRutas.ruta;