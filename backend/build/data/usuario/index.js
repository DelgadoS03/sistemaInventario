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
const utilsU = require('../utils');
const keysU = require('../../config');
const mssqlU = require('mssql');
//metodo para listar los usuarios
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlU.connect(keysU.sql);
        const sqlQueries = yield utilsU.loadSqlQueries('usuario');
        const list = yield pool.request()
            .query(sqlQueries.usuarioList);
        return list.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para listar un solo usuario
const getOneUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlU.connect(keysU.sql);
        const sqlQueries = yield utilsU.loadSqlQueries('usuario');
        const listOne = yield pool.request()
            .input('id', mssqlU.Int, id)
            .query(sqlQueries.usuarioOne);
        return listOne.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Metodo para crear un nuevo usuario
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlU.connect(keysU.sql);
        const sqlQueries = yield utilsU.loadSqlQueries('usuario');
        const insert = yield pool.request()
            .input('username', mssqlU.VarChar(100), data.username)
            .input('password', mssqlU.VarChar(20), data.password)
            .input('correo', mssqlU.VarChar(100), data.correo)
            .input('puesto', mssqlU.VarChar(100), data.puesto)
            .input('nombre', mssqlU.VarChar(100), data.nombre_user)
            .input('apellido1', mssqlU.VarChar(100), data.apellido1)
            .input('apellido2', mssqlU.VarChar(100), data.apellido2)
            .input('no_colaborador', mssqlU.VarChar(50), data.no_colaborador)
            .input('departamento', mssqlU.Int, data.departamento)
            .input('tipo', mssqlU.Int, data.tipo_user)
            .query(sqlQueries.usuarioAdd);
        return insert.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para actualizar/editar un usuario
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlU.connect(keysU.sql);
        const sqlQueries = yield utilsU.loadSqlQueries('usuario');
        const update = yield pool.request()
            .input('id', mssqlU.Int, id)
            .input('username', mssqlU.VarChar(100), data.username)
            .input('password', mssqlU.VarChar(20), data.password)
            .input('correo', mssqlU.VarChar(100), data.correo)
            .input('puesto', mssqlU.VarChar(100), data.puesto)
            .input('nombre', mssqlU.VarChar(100), data.nombre_user)
            .input('apellido1', mssqlU.VarChar(100), data.apellido1)
            .input('apellido2', mssqlU.VarChar(100), data.apellido2)
            .input('no_colaborador', mssqlU.VarChar(50), data.no_colaborador)
            .input('departamento', mssqlU.Int, data.departamento)
            .input('tipo', mssqlU.Int, data.tipo_user)
            .query(sqlQueries.usuarioEdit);
        return update.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para eliminar un usuario
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlU.connect(keysU.sql);
        const sqlQueries = yield utilsU.loadSqlQueries('usuario');
        const deleteU = yield pool.request()
            .input('id', mssqlU.Int, id)
            .query(sqlQueries.usuarioDelete);
        return deleteU.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Exportando todos los metodos anteriores
module.exports = {
    getUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
};
