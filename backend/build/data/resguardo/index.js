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
const utilsR = require('../utils');
const keysR = require('../../config');
const mssqlR = require('mssql');
//metodo para listar los resguardos
const getResguardo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlR.connect(keysR.sql);
        const sqlQueries = yield utilsR.loadSqlQueries('resguardo');
        const list = yield pool.request()
            .query(sqlQueries.resguardoList);
        return list.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para listar un solo resguardo
const getOneResguardo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlR.connect(keysR.sql);
        const sqlQueries = yield utilsR.loadSqlQueries('resguardo');
        const listOne = yield pool.request()
            .input('id', mssqlR.Int, id)
            .query(sqlQueries.resguardoOne);
        return listOne.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Metodo para crear un nuevo resguardo
const createResguardo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlR.connect(keysR.sql);
        const sqlQueries = yield utilsR.loadSqlQueries('resguardo');
        const insert = yield pool.request()
            .input('fecha', mssqlR.Date, data.fecha)
            .input('observaciones', mssqlR.VarChar(200), data.observaciones)
            .input('documento', mssqlR.Text, data.documento)
            .input('usuario', mssqlR.Int, data.usuario)
            .input('persona', mssqlR.Int, data.persona)
            .query(sqlQueries.resguardoAdd);
        return insert.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para actualizar/editar un resguardo
const updateResguardo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlR.connect(keysR.sql);
        const sqlQueries = yield utilsR.loadSqlQueries('resguardo');
        const update = yield pool.request()
            .input('id', mssqlR.Int, id)
            .input('fecha', mssqlR.Date, data.fecha)
            .input('observaciones', mssqlR.VarChar(200), data.observaciones)
            .input('documento', mssqlR.Text, data.documento)
            .input('usuario', mssqlR.Int, data.usuario)
            .input('persona', mssqlR.Int, data.persona)
            .query(sqlQueries.resguardoEdit);
        return update.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para eliminar un resguardo
const deleteResguardo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlR.connect(keysR.sql);
        const sqlQueries = yield utilsR.loadSqlQueries('resguardo');
        const deleteR = yield pool.request()
            .input('id', mssqlR.Int, id)
            .query(sqlQueries.resguardoDelete);
        return deleteR.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Exportando todos los metodos anteriores
module.exports = {
    getResguardo,
    getOneResguardo,
    createResguardo,
    updateResguardo,
    deleteResguardo
};
