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
const departamentoData = require('../data/departamento/index');
class DepartamentosControlador {
    //Metodo para listar los departamentos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield departamentoData.getDepartamento();
                res.send(list);
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
                const listOne = yield departamentoData.getOneDepartamento(id);
                res.send(listOne);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
            //const categoria= await pool.query('select categoria.nombre from articulo inner join categoria on articulo.id_art= ? && articulo.categoria_fk=categoria.id_cat',[id]);
        });
    }
    //Metodo para agregar un departamento
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const insert = yield departamentoData.createDepartamento(data);
                res.send(insert);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para editar/actualizar un departamento
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = req.body;
                const updateDep = yield departamentoData.updateDepartamento(id, data);
                res.send(updateDep);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    //Metodo para eliminar un departamento
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deleteDep = yield departamentoData.deleteDepartamento(id);
                res.json({ text: 'Departamento Eliminado' });
                res.send(deleteDep);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
const departamentoControlador = new DepartamentosControlador();
exports.default = departamentoControlador;
