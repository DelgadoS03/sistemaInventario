"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriascontrolador_1 = __importDefault(require("../controladores/categoriascontrolador"));
class CategoriasRutas {
    constructor() {
        this.ruta = express_1.Router();
        this.config();
    }
    config() {
        //ruta para listar las categorias
        this.ruta.get('/list', categoriascontrolador_1.default.list);
        //ruta para observar/listar una sola categoria
        this.ruta.get('/list/:id', categoriascontrolador_1.default.listOne);
        //ruta para agregar categoria
        this.ruta.post('/add', categoriascontrolador_1.default.add);
        //Ruta para actualizar/editar una categoria
        this.ruta.put('/edit/:id', categoriascontrolador_1.default.update);
        //Ruta para eliminar una categoria
        this.ruta.delete('/delete/:id', categoriascontrolador_1.default.delete);
    }
}
const categoriaRutas = new CategoriasRutas();
exports.default = categoriaRutas.ruta;
