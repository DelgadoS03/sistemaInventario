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
const utilsD = require('../utils');
const keysD = require('../../config');
const mssqlD = require('mssql');
//metodo para listar departamentos
const getDepartamento = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlD.connect(keysD.sql);
        const sqlQueries = yield utilsD.loadSqlQueries('departamento');
        const list = yield pool.request().query(sqlQueries.departamentoList);
        return list.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para listar un departamento
const getOneDepartamento = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlD.connect(keysD.sql);
        const sqlQueries = yield utilsD.loadSqlQueries('departamento');
        const listOne = yield pool.request()
            .input('id', mssqlD.Int, id)
            .query(sqlQueries.departamentoOne);
        return listOne.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para crear un departamento
const createDepartamento = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlD.connect(keysD.sql);
        const sqlQueries = yield utilsD.loadSqlQueries('departamento');
        const insert = yield pool.request()
            .input('nombre', mssqlD.VarChar(100), data.nombre_dep)
            .input('clave', mssqlD.VarChar(100), data.clave)
            .query(sqlQueries.departamentoAdd);
        return insert.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Metodo para actualizar/editar un departamento
const updateDepartamento = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlD.connect(keysD.sql);
        const sqlQueries = yield utilsD.loadSqlQueries('departamento');
        const update = yield pool.request()
            .input('id', mssqlD.Int, id)
            .input('nombre', mssqlD.VarChar(100), data.nombre_dep)
            .input('clave', mssqlD.VarChar(100), data.clave)
            .query(sqlQueries.departamentoEdit);
        return update.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Metodo para eliminar un departamento
const deleteDepartamento = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlD.connect(keysD.sql);
        const sqlQueries = yield utilsD.loadSqlQueries('departamento');
        const deleteD = yield pool.request()
            .input('id', mssqlD.Int, id)
            .query(sqlQueries.departamentoDelete);
        return deleteD.recordset;
    }
    catch (error) {
        return error.message;
    }
});
module.exports = {
    getDepartamento,
    getOneDepartamento,
    createDepartamento,
    updateDepartamento,
    deleteDepartamento
};
