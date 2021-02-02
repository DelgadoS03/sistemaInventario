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
const userData = require('../data/usuario/index');
class UserControlador {
    //Metodo para listar usuarios
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userlist = yield userData.getUser();
                res.send(userlist);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para ver un solo usuario
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const userOne = yield userData.getOneUser(id);
                res.send(userOne);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para agregar un usuario
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const userAdd = yield userData.createUser(data);
                res.send(userAdd);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para editar/actualizar un usuario
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = req.body;
                const userUpdate = yield userData.updateUser(id, data);
                res.send(userUpdate);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para eliminar un usuario
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const userDelete = yield userData.deleteUser(id);
                res.json({ text: 'Usuario Eliminado' });
                res.send(userDelete);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
const userControlador = new UserControlador();
exports.default = userControlador;
