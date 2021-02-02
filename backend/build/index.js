"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = require('body-parser');
//ruta para las categorias
const categoriasRutas_1 = __importDefault(require("./rutas/categoriasRutas"));
//ruta de la pagina inicial
const indexRutas_1 = __importDefault(require("./rutas/indexRutas"));
//ruta de los articulos
const articulosRutas_1 = __importDefault(require("./rutas/articulosRutas"));
//ruta de los departamentos
const departamentosRuta_1 = __importDefault(require("./rutas/departamentosRuta"));
//Ruta de los tipos de usuarios
const tipo_userRutas_1 = __importDefault(require("./rutas/tipo_userRutas"));
//Ruta para usuarios
const usuarioRutas_1 = __importDefault(require("./rutas/usuarioRutas"));
//Rutas para personas
const personaRutas_1 = __importDefault(require("./rutas/personaRutas"));
//Rutas para los resguardos
const resguardoRutas_1 = __importDefault(require("./rutas/resguardoRutas"));
//Clase para el servidor
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Metodo de configuracion del servidor
    config() {
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        this.app.use(bodyParser.json());
        this.app.set('port', process.env.PORT || 8080);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Metodo manejador de rutas de la aplición
    routes() {
        this.app.use('/', indexRutas_1.default);
        this.app.use('/articulos', articulosRutas_1.default);
        this.app.use('/categorias', categoriasRutas_1.default);
        this.app.use('/departamentos', departamentosRuta_1.default);
        this.app.use('/tipo_user', tipo_userRutas_1.default);
        this.app.use('/user', usuarioRutas_1.default);
        this.app.use('/personas', personaRutas_1.default);
        this.app.use('/resguardos', resguardoRutas_1.default);
    }
    //Metodo donde arranca el sevidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor arrancado en le puerto ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
