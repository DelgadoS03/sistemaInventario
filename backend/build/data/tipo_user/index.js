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
const utilsT = require('../utils');
const keysT = require('../../config');
const mssqlT = require('mssql');
//metodo para listar los tipos de usuarios
const getTipo_user = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlT.connect(keysT.sql);
        const sqlQueries = yield utilsT.loadSqlQueries('tipo_user');
        const list = yield pool.request().query(sqlQueries.tipo_userList);
        return list.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para listar un tipo de usuario
const getOneTipo_user = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlT.connect(keysT.sql);
        const sqlQueries = yield utilsT.loadSqlQueries('tipo_user');
        const listOne = yield pool.request()
            .input('id', mssqlT.Int, id)
            .query(sqlQueries.tipo_userOne);
        return listOne.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para crear un tipo de usuario
const createTipo_user = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlT.connect(keysT.sql);
        const sqlQueries = yield utilsT.loadSqlQueries('tipo_user');
        const insert = yield pool.request()
            .input('tipo', mssqlT.VarChar(50), data.rol_usuario)
            .query(sqlQueries.tipo_userAdd);
        return insert.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Metodo para actualizar/editar un tipo de usuario
const updateTipo_user = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlT.connect(keysT.sql);
        const sqlQueries = yield utilsT.loadSqlQueries('tipo_user');
        const update = yield pool.request()
            .input('id', mssqlT.Int, id)
            .input('tipo', mssqlT.VarChar(50), data.rol_usuario)
            .query(sqlQueries.tipo_userEdit);
        return update.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Metodo para eliminar un tipo de usuario
const deleteTipo_user = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlT.connect(keysT.sql);
        const sqlQueries = yield utilsT.loadSqlQueries('tipo_user');
        const deleteT = yield pool.request()
            .input('id', mssqlT.Int, id)
            .query(sqlQueries.tipo_userDelete);
        return deleteT.recordset;
    }
    catch (error) {
        return error.message;
    }
});
module.exports = {
    getTipo_user,
    getOneTipo_user,
    createTipo_user,
    updateTipo_user,
    deleteTipo_user
};
