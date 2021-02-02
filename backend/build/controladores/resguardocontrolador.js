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
const resguardoData = require('../data/resguardo/index');
class ResguardoControlador {
    //Metodo para listar resguardos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resguardolist = yield resguardoData.getResguardo();
                res.send(resguardolist);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para ver un solo resguardo
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const resguardoOne = yield resguardoData.getOneResguardo(id);
                res.send(resguardoOne);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para agregar un resguardo
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const resguardoAdd = yield resguardoData.createResguardo(data);
                res.send(resguardoAdd);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para editar/actualizar un resguardo
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = req.body;
                const resguardoUpdate = yield resguardoData.updateResguardo(id, data);
                res.send(resguardoUpdate);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para eliminar un resguardo
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const resguardoDelete = yield resguardoData.deleteResguardo(id);
                res.json({ text: 'resguardo Eliminado' });
                res.send(resguardoDelete);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
const resguardoControlador = new ResguardoControlador();
exports.default = resguardoControlador;
