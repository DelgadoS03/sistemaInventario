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
const categoriaData = require('../data/categoria/index');
class CategoriasControlador {
    //Metodo para listar las categorias
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listC = yield categoriaData.getCategoria();
                res.send(listC);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para ver una sola categoria
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const listOne = yield categoriaData.getOneCategoria(id);
                res.send(listOne);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
            //const categoria= await pool.query('select categoria.nombre from articulo inner join categoria on articulo.id_art= ? && articulo.categoria_fk=categoria.id_cat',[id]);
        });
    }
    //Metodo para agregar una categoria
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const addCat = yield categoriaData.createCategoria(data);
                res.send(addCat);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para editar/actualizar una categoria
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = req.body;
                const updateCat = yield categoriaData.updateCategoria(id, data);
                res.send(updateCat);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para eliminar una categoria
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deleteCat = yield categoriaData.deleteCategoria(id);
                res.json({ text: 'Articulo Eliminado' });
                res.send(deleteCat);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
const categoriaControlador = new CategoriasControlador();
exports.default = categoriaControlador;
