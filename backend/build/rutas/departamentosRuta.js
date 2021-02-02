"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentocontrolador_1 = __importDefault(require("../controladores/departamentocontrolador"));
class DepartamentosRutas {
    constructor() {
        this.ruta = express_1.Router();
        this.config();
    }
    config() {
        //ruta para listar los departamentos
        this.ruta.get('/list', departamentocontrolador_1.default.list);
        //ruta para observar/listar un solo departamento
        this.ruta.get('/list/:id', departamentocontrolador_1.default.listOne);
        //ruta para agregar un departamento
        this.ruta.post('/add', departamentocontrolador_1.default.add);
        //Ruta para actualizar/editar un departamento
        this.ruta.put('/edit/:id', departamentocontrolador_1.default.update);
        //Ruta para eliminar un departamento
        this.ruta.delete('/delete/:id', departamentocontrolador_1.default.delete);
    }
}
const departamentoRutas = new DepartamentosRutas();
exports.default = departamentoRutas.ruta;
