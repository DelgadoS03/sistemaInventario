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
const articuloData = require('../data/articulo/index');
class ArticulosControlador {
    //Metodo para listar articulos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const articulo = yield articuloData.getArticulo();
                res.send(articulo);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para ver un solo articulo
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idArt = req.params.id;
                const articulo = yield articuloData.getOneArticulo(idArt);
                res.send(articulo);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para agregar un articulo
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const addArt = yield articuloData.createArticulo(data);
                res.send(addArt);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para editar/actualizar articulo
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idArt = req.params.id;
                const data = req.body;
                const updateArt = yield articuloData.updateArticulo(idArt, data);
                res.send(updateArt);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para eliminar un articulo
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idArt = req.params.id;
                const deleteArt = yield articuloData.deleteArticulo(idArt);
                res.json({ text: 'Articulo Eliminado' });
                res.send(deleteArt);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
const articulosControlador = new ArticulosControlador();
exports.default = articulosControlador;
