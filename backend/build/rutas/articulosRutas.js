"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articuloscontrolador_1 = __importDefault(require("../controladores/articuloscontrolador"));
class ArticulosRutas {
    constructor() {
        this.ruta = express_1.Router();
        this.config();
    }
    config() {
        //ruta para listas 
        this.ruta.get('/list', articuloscontrolador_1.default.list);
        //ruta para observar/listar un solo articulo
        this.ruta.get('/list/:id', articuloscontrolador_1.default.listOne);
        //ruta para agregar articulo
        this.ruta.post('/add', articuloscontrolador_1.default.add);
        //Ruta para actualizar/editar un articulo
        this.ruta.put('/edit/:id', articuloscontrolador_1.default.update);
        //Ruta para eliminar
        this.ruta.delete('/delete/:id', articuloscontrolador_1.default.delete);
    }
}
const articuloRutas = new ArticulosRutas();
exports.default = articuloRutas.ruta;
