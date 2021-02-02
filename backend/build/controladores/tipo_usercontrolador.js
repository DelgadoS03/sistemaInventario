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
const tipo_userData = require('../data/tipo_user/index');
class Tipo_userControlador {
    //Metodo para listar los tipos de usuarios
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listT = yield tipo_userData.getTipo_user();
                res.send(listT);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para ver un solo tipo de usuario
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const listOne = yield tipo_userData.getOneTipo_user(id);
                res.send(listOne);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
            //const categoria= await pool.query('select categoria.nombre from articulo inner join categoria on articulo.id_art= ? && articulo.categoria_fk=categoria.id_cat',[id]);
        });
    }
    //Metodo para agregar un tipo de usuario
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const addT = yield tipo_userData.createTipo_user(data);
                res.send(addT);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para editar/actualizar un tipo de usuario
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = req.body;
                const updateT = yield tipo_userData.updateTipo_user(id, data);
                res.send(updateT);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para eliminar un tipo de usuario
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deleteT = yield tipo_userData.deleteTipo_user(id);
                res.json({ text: 'tipo user Eliminado' });
                res.send(deleteT);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
const tipo_userControlador = new Tipo_userControlador();
exports.default = tipo_userControlador;
