"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personacontrolador_1 = __importDefault(require("../controladores/personacontrolador"));
class PersonaRutas {
    constructor() {
        this.ruta = express_1.Router();
        this.config();
    }
    config() {
        //ruta para listar personas 
        this.ruta.get('/list', personacontrolador_1.default.list);
        //ruta para observar/listar una sola persona
        this.ruta.get('/list/:id', personacontrolador_1.default.listOne);
        //ruta para agregar una persona
        this.ruta.post('/add', personacontrolador_1.default.add);
        //Ruta para actualizar/editar una sola persona
        this.ruta.put('/edit/:id', personacontrolador_1.default.update);
        //Ruta para eliminar una persona
        this.ruta.delete('/delete/:id', personacontrolador_1.default.delete);
    }
}
const personaRutas = new PersonaRutas();
exports.default = personaRutas.ruta;
