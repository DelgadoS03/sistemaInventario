const utilsP = require('../utils');
const keysP = require('../../config');
const mssqlP = require('mssql');

//metodo para listar las personas
const getPersona = async () =>{
    try {
        let pool = await mssqlP.connect(keysP.sql);
        const sqlQueries = await utilsP.loadSqlQueries('persona');
        const list = await pool.request()
        .query(sqlQueries.personaList);
        return list.recordset;

    } catch (error) {
        return error.message;
    }
}

//metodo para listar una sola persona
const getOnePersona = async (id) =>{
    try {
        let pool = await mssqlP.connect(keysP.sql);
        const sqlQueries = await utilsP.loadSqlQueries('persona');
        const listOne= await pool.request()
        .input('id',mssqlP.Int,id)
        .query(sqlQueries.personaOne);
        return listOne.recordset;
    } catch (error) {
        return error.message;
    }
}

//Metodo para crear una nueva persona
const createPersona = async (data) =>{
    try {
        let pool = await mssqlP.connect(keysP.sql);
        const sqlQueries = await utilsP.loadSqlQueries('persona');
        const insert = await pool.request()
        .input('no_colaborador',mssqlP.VarChar(100),data.no_colaborador)
        .input('nombre',mssqlP.VarChar(100),data.nombre)
        .input('apellido1',mssqlP.VarChar(100),data.apellido1)
        .input('apellido2',mssqlP.VarChar(100),data.apellido2)
        .input('correo',mssqlP.VarChar(60),data.correo)
        .input('telefono',mssqlP.VarChar(15),data.telefono)
        .input('puesto',mssqlP.VarChar(100),data.puesto)
        .input('departamento',mssqlP.Int,data.departament)
        .query(sqlQueries.personaAdd);
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para actualizar/editar una persona
const updatePersona = async (id,data)=>{
    try {
        let pool = await mssqlP.connect(keysP.sql);
        const sqlQueries = await utilsP.loadSqlQueries('persona');
        const update = await pool.request()
        .input('id',mssqlP.Int,id)
        .input('no_colaborador',mssqlP.VarChar(100),data.no_colaborador)
        .input('nombre',mssqlP.VarChar(100),data.nombre)
        .input('apellido1',mssqlP.VarChar(100),data.apellido1)
        .input('apellido2',mssqlP.VarChar(100),data.apellido2)
        .input('correo',mssqlP.VarChar(60),data.correo)
        .input('telefono',mssqlP.VarChar(15),data.telefono)
        .input('puesto',mssqlP.VarChar(100),data.puesto)
        .input('departamento',mssqlP.Int,data.departament)
        .query(sqlQueries.personaEdit);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para eliminar una persona
const deletePersona = async (id) =>{
    try {
        let pool = await mssqlP.connect(keysP.sql);
        const sqlQueries = await utilsP.loadSqlQueries('persona');
        const deleteP = await pool.request()
        .input('id',mssqlP.Int,id)
        .query(sqlQueries.personaDelete);
        return deleteP.recordset;
    } catch (error) {
        return error.message;
    }
}

//Exportando todos los metodos anteriores
module.exports={
    getPersona,
    getOnePersona,
    createPersona,
    updatePersona,
    deletePersona
}