"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControlador = void 0;
class IndexControlador {
    index(req, res) {
        res.json({ text: 'La otra ruta esta en /articulos' });
    }
}
exports.indexControlador = new IndexControlador();
