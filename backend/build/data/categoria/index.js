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
const utilsC = require('../utils');
const keysC = require('../../config');
const mssqlC = require('mssql');
//metodo para listar categorias
const getCategoria = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlC.connect(keysC.sql);
        const sqlQueries = yield utilsC.loadSqlQueries('categoria');
        const list = yield pool.request().query(sqlQueries.categoriaList);
        return list.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para listar una categoria
const getOneCategoria = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlC.connect(keysC.sql);
        const sqlQueries = yield utilsC.loadSqlQueries('categoria');
        const listOne = yield pool.request()
            .input('id', mssqlC.Int, id)
            .query(sqlQueries.categoriaOne);
        return listOne.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para crear una categoria
const createCategoria = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlC.connect(keysC.sql);
        const sqlQueries = yield utilsC.loadSqlQueries('categoria');
        const insertCategoria = yield pool.request()
            .input('nombre', mssqlC.VarChar(100), data.nombre_cat)
            .query(sqlQueries.categoriaAdd);
        return insertCategoria.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Metodo para actualizar/editar una categoria
const updateCategoria = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlC.connect(keysC.sql);
        const sqlQueries = yield utilsC.loadSqlQueries('categoria');
        const updateCategoria = yield pool.request()
            .input('id', mssqlC.Int, id)
            .input('nombre', mssqlC.VarChar(100), data.nombre_cat)
            .query(sqlQueries.categoriaEdit);
        return updateCategoria.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Metodo para eliminar una categoria
const deleteCategoria = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlC.connect(keysC.sql);
        const sqlQueries = yield utilsC.loadSqlQueries('categoria');
        const deleteCategoria = yield pool.request()
            .input('id', mssqlC.Int, id)
            .query(sqlQueries.categoriaDelete);
        return deleteCategoria.recordset;
    }
    catch (error) {
        return error.message;
    }
});
module.exports = {
    getCategoria,
    getOneCategoria,
    createCategoria,
    updateCategoria,
    deleteCategoria
};
