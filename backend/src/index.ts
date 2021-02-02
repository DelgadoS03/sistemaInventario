import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
const bodyParser = require('body-parser');

//ruta para las categorias
import  categoriasRutas  from "./rutas/categoriasRutas";
//ruta de la pagina inicial
import indexRutas from './rutas/indexRutas';
//ruta de los articulos
import articulosRutas from './rutas/articulosRutas';
//ruta de los departamentos
import departamentosRutas  from "./rutas/departamentosRuta";
//Ruta de los tipos de usuarios
import tipo_userRutas  from "./rutas/tipo_userRutas";
//Ruta para usuarios
import userRutas from "./rutas/usuarioRutas";
//Rutas para personas
import personaRutas from "./rutas/personaRutas";
//Rutas para los resguardos
import resguardoRutas from "./rutas/resguardoRutas";

//Clase para el servidor
class Server{
    //variable de tipo aplicación
    public app: Application;
    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }
    //Metodo de configuracion del servidor
    config():void{
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }))
        // parse application/json
        this.app.use(bodyParser.json());
        this.app.set('port',process.env.PORT || 8080);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    //Metodo manejador de rutas de la aplición
    routes():void{
        this.app.use('/',indexRutas);
        this.app.use('/articulos',articulosRutas);
        this.app.use('/categorias',categoriasRutas);
        this.app.use('/departamentos',departamentosRutas);
        this.app.use('/tipo_user',tipo_userRutas);
        this.app.use('/user',userRutas);
        this.app.use('/personas',personaRutas);
        this.app.use('/resguardos',resguardoRutas);
    }
    //Metodo donde arranca el sevidor
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor arrancado en le puerto ',this.app.get('port'));
        });
    }
}

const server = new Server();

server.start();