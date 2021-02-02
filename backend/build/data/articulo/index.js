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
const utils = require('../utils');
const keys = require('../../config');
const mssql = require('mssql');
//metodo para listar los articulos
const getArticulo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql.connect(keys.sql);
        const sqlQueries = yield utils.loadSqlQueries('articulo');
        const list = yield pool.request().query(sqlQueries.articulolist);
        return list.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para listar un solo articulo
const getOneArticulo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql.connect(keys.sql);
        const sqlQueries = yield utils.loadSqlQueries('articulo');
        const oneArticulo = yield pool.request()
            .input('id', mssql.Int, id)
            .query(sqlQueries.articulolistone);
        return oneArticulo.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Metodo para crear un nuevo articulo
const createArticulo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql.connect(keys.sql);
        const sqlQueries = yield utils.loadSqlQueries('articulo');
        const insertArticulo = yield pool.request()
            .input('nombre', mssql.VarChar(100), data.nombre_art)
            .input('marca', mssql.VarChar(100), data.marca)
            .input('modelo', mssql.VarChar(100), data.modelo)
            .input('no_serie', mssql.VarChar(50), data.no_serie)
            .input('no_inventario', mssql.VarChar(50), data.no_inventario)
            .input('cantidad', mssql.Int, data.cantidad)
            .input('descripcion', mssql.Text, data.descripcion)
            .input('localizacion', mssql.Text, data.localizacion)
            .input('imagen', mssql.Text, data.imagen)
            .input('categoria', mssql.Int, data.categoria)
            .query(sqlQueries.articuloadd);
        return insertArticulo.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para actualizar/editar un articulo
const updateArticulo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql.connect(keys.sql);
        const sqlQueries = yield utils.loadSqlQueries('articulo');
        const updateArticulo = yield pool.request()
            .input('id', mssql.Int, id)
            .input('nombre', mssql.VarChar(100), data.nombre_art)
            .input('marca', mssql.VarChar(100), data.marca)
            .input('modelo', mssql.VarChar(100), data.modelo)
            .input('no_serie', mssql.VarChar(50), data.no_serie)
            .input('no_inventario', mssql.VarChar(50), data.no_inventario)
            .input('cantidad', mssql.Int, data.cantidad)
            .input('descripcion', mssql.Text, data.descripcion)
            .input('localizacion', mssql.Text, data.localizacion)
            .input('imagen', mssql.Text, data.imagen)
            .input('categoria', mssql.Int, data.categoria)
            .query(sqlQueries.articuloedit);
        return updateArticulo.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para eliminar un articulo
const deleteArticulo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql.connect(keys.sql);
        const sqlQueries = yield utils.loadSqlQueries('articulo');
        const deleteArticulo = yield pool.request()
            .input('id', mssql.Int, id)
            .query(sqlQueries.articulodelete);
        return deleteArticulo.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Exportando todos los metodos anteriores
module.exports = {
    getArticulo,
    getOneArticulo,
    createArticulo,
    updateArticulo,
    deleteArticulo
};
