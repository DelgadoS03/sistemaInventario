"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resguardocontrolador_1 = __importDefault(require("../controladores/resguardocontrolador"));
class ResguardoRutas {
    constructor() {
        this.ruta = express_1.Router();
        this.config();
    }
    config() {
        //ruta para listar resguardo 
        this.ruta.get('/list', resguardocontrolador_1.default.list);
        //ruta para observar/listar un solo resguardo
        this.ruta.get('/list/:id', resguardocontrolador_1.default.listOne);
        //ruta para agregar un solo resguardo
        this.ruta.post('/add', resguardocontrolador_1.default.add);
        //Ruta para actualizar/editar un solo resguardo
        this.ruta.put('/edit/:id', resguardocontrolador_1.default.update);
        //Ruta para eliminar un resguardo
        this.ruta.delete('/delete/:id', resguardocontrolador_1.default.delete);
    }
}
const resguardoRutas = new ResguardoRutas();
exports.default = resguardoRutas.ruta;
