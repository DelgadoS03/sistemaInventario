"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const personaData = require('../data/persona/index');
class PersonaControlador {
    //Metodo para listar persona
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personalist = yield personaData.getPersona();
                res.send(personalist);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para ver una sola persona
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const personaOne = yield personaData.getOnePersona(id);
                res.send(personaOne);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para agregar una persona
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const personaAdd = yield personaData.createPersona(data);
                res.send(personaAdd);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para editar/actualizar una persona
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = req.body;
                const personaUpdate = yield personaData.updatePersona(id, data);
                res.send(personaUpdate);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para eliminar una persona
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const personaDelete = yield personaData.deletePersona(id);
                res.json({ text: 'Datdo Eliminado' });
                res.send(personaDelete);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
const personaControlador = new PersonaControlador();
exports.default = personaControlador;
