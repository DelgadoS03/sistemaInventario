"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbMysql_1 = __importDefault(require("../../dbMysql"));
class ArticulosControlador {
    //Metodo para litar articulos
    list(req, res) {
        dbMysql_1.default.query('DESCRIBE games');
        res.json('Listando juegos');
    }
    //Metodo para ver un solo articulo
    listOne(req, res) {
        res.json({ text: 'Observando el articulo N°: ' + req.params.id });
    }
    //Metodo para agregar un articulo
    add(req, res) {
        dbMysql_1.default.query('INSERTE INTO games set ?', [req.body]);
        res.json({ text: 'Articulo agregado ' });
    }
    //Metodo para editar/actualizar articulo
    update(req, res) {
        res.json({ text: 'Editando un articulo ' + req.params.id });
    }
    //Metodo para eliminar un articulo
    delete(req, res) {
        res.json({ text: 'Eliminando un articulo ' + req.params.id });
    }
}
const articulosControlador = new ArticulosControlador();
exports.default = articulosControlador;
