"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexcontrolador_1 = require("../controladores/indexcontrolador");
//Clase para la ruta principal
class IndexRutas {
    constructor() {
        this.ruta = express_1.Router();
        this.config();
    }
    //metodo que configura la ruta inicial
    config() {
        this.ruta.get('/', indexcontrolador_1.indexControlador.index);
    }
}
const indexRutas = new IndexRutas();
exports.default = indexRutas.ruta;
