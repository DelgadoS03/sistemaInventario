import { Router } from "express";
import { indexControlador } from "../controladores/indexcontrolador";

//Clase para la ruta principal
class IndexRutas{
    public ruta: Router= Router();

    constructor(){
        this.config();
    }
    //metodo que configura la ruta inicial
    config():void{
        this.ruta.get('/',indexControlador.index);
    }
}

const indexRutas = new IndexRutas();
export default indexRutas.ruta;