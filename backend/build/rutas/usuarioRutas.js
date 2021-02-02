"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariocontrolador_1 = __importDefault(require("../controladores/usuariocontrolador"));
class UserRutas {
    constructor() {
        this.ruta = express_1.Router();
        this.config();
    }
    config() {
        //ruta para listar usuarios 
        this.ruta.get('/list', usuariocontrolador_1.default.list);
        //ruta para observar/listar un solo usuario
        this.ruta.get('/list/:id', usuariocontrolador_1.default.listOne);
        //ruta para agregar un usuario
        this.ruta.post('/add', usuariocontrolador_1.default.add);
        //Ruta para actualizar/editar un usuario
        this.ruta.put('/edit/:id', usuariocontrolador_1.default.update);
        //Ruta para eliminar un usuario
        this.ruta.delete('/delete/:id', usuariocontrolador_1.default.delete);
    }
}
const userRutas = new UserRutas();
exports.default = userRutas.ruta;
