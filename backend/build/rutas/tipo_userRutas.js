"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipo_usercontrolador_1 = __importDefault(require("../controladores/tipo_usercontrolador"));
class Tipo_userRutas {
    constructor() {
        this.ruta = express_1.Router();
        this.config();
    }
    config() {
        //ruta para listar los tipos de usuarios
        this.ruta.get('/list', tipo_usercontrolador_1.default.list);
        //ruta para observar/listar un solo tipo de usuario
        this.ruta.get('/list/:id', tipo_usercontrolador_1.default.listOne);
        //ruta para agregar un tipo de usuario
        this.ruta.post('/add', tipo_usercontrolador_1.default.add);
        //Ruta para actualizar/editar un tipo de usuario
        this.ruta.put('/edit/:id', tipo_usercontrolador_1.default.update);
        //Ruta para eliminar un tipo de usuario
        this.ruta.delete('/delete/:id', tipo_usercontrolador_1.default.delete);
    }
}
const tipo_userRutas = new Tipo_userRutas();
exports.default = tipo_userRutas.ruta;
