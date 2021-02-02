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
const utilsP = require('../utils');
const keysP = require('../../config');
const mssqlP = require('mssql');
//metodo para listar las personas
const getPersona = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlP.connect(keysP.sql);
        const sqlQueries = yield utilsP.loadSqlQueries('persona');
        const list = yield pool.request()
            .query(sqlQueries.personaList);
        return list.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para listar una sola persona
const getOnePersona = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlP.connect(keysP.sql);
        const sqlQueries = yield utilsP.loadSqlQueries('persona');
        const listOne = yield pool.request()
            .input('id', mssqlP.Int, id)
            .query(sqlQueries.personaOne);
        return listOne.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Metodo para crear una nueva persona
const createPersona = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlP.connect(keysP.sql);
        const sqlQueries = yield utilsP.loadSqlQueries('persona');
        const insert = yield pool.request()
            .input('no_colaborador', mssqlP.VarChar(100), data.no_colaborador)
            .input('nombre', mssqlP.VarChar(100), data.nombre)
            .input('apellido1', mssqlP.VarChar(100), data.apellido1)
            .input('apellido2', mssqlP.VarChar(100), data.apellido2)
            .input('correo', mssqlP.VarChar(60), data.correo)
            .input('telefono', mssqlP.VarChar(15), data.telefono)
            .input('puesto', mssqlP.VarChar(100), data.puesto)
            .input('departamento', mssqlP.Int, data.departament)
            .query(sqlQueries.personaAdd);
        return insert.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para actualizar/editar una persona
const updatePersona = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlP.connect(keysP.sql);
        const sqlQueries = yield utilsP.loadSqlQueries('persona');
        const update = yield pool.request()
            .input('id', mssqlP.Int, id)
            .input('no_colaborador', mssqlP.VarChar(100), data.no_colaborador)
            .input('nombre', mssqlP.VarChar(100), data.nombre)
            .input('apellido1', mssqlP.VarChar(100), data.apellido1)
            .input('apellido2', mssqlP.VarChar(100), data.apellido2)
            .input('correo', mssqlP.VarChar(60), data.correo)
            .input('telefono', mssqlP.VarChar(15), data.telefono)
            .input('puesto', mssqlP.VarChar(100), data.puesto)
            .input('departamento', mssqlP.Int, data.departament)
            .query(sqlQueries.personaEdit);
        return update.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//metodo para eliminar una persona
const deletePersona = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssqlP.connect(keysP.sql);
        const sqlQueries = yield utilsP.loadSqlQueries('persona');
        const deleteP = yield pool.request()
            .input('id', mssqlP.Int, id)
            .query(sqlQueries.personaDelete);
        return deleteP.recordset;
    }
    catch (error) {
        return error.message;
    }
});
//Exportando todos los metodos anteriores
module.exports = {
    getPersona,
    getOnePersona,
    createPersona,
    updatePersona,
    deletePersona
};
