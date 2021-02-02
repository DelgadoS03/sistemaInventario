const utilsU = require('../utils');
const keysU = require('../../config');
const mssqlU = require('mssql');

//metodo para listar los usuarios
const getUser = async () =>{
    try {
        let pool = await mssqlU.connect(keysU.sql);
        const sqlQueries = await utilsU.loadSqlQueries('usuario');
        const list = await pool.request()
        .query(sqlQueries.usuarioList);
        return list.recordset;

    } catch (error) {
        return error.message;
    }
}

//metodo para listar un solo usuario
const getOneUser = async (id) =>{
    try {
        let pool = await mssqlU.connect(keysU.sql);
        const sqlQueries = await utilsU.loadSqlQueries('usuario');
        const listOne= await pool.request()
        .input('id',mssqlU.Int,id)
        .query(sqlQueries.usuarioOne);
        return listOne.recordset;
    } catch (error) {
        return error.message;
    }
}

//Metodo para crear un nuevo usuario
const createUser = async (data) =>{
    try {
        let pool = await mssqlU.connect(keysU.sql);
        const sqlQueries = await utilsU.loadSqlQueries('usuario');
        const insert = await pool.request()
        .input('username',mssqlU.VarChar(100),data.username)
        .input('password',mssqlU.VarChar(20),data.password)
        .input('correo',mssqlU.VarChar(100),data.correo)
        .input('puesto',mssqlU.VarChar(100),data.puesto)
        .input('nombre',mssqlU.VarChar(100),data.nombre_user)
        .input('apellido1',mssqlU.VarChar(100),data.apellido1)
        .input('apellido2',mssqlU.VarChar(100),data.apellido2)
        .input('no_colaborador',mssqlU.VarChar(50),data.no_colaborador)
        .input('departamento',mssqlU.Int,data.departamento)
        .input('tipo',mssqlU.Int,data.tipo_user)
        .query(sqlQueries.usuarioAdd);
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para actualizar/editar un usuario
const updateUser = async (id,data)=>{
    try {
        let pool = await mssqlU.connect(keysU.sql);
        const sqlQueries = await utilsU.loadSqlQueries('usuario');
        const update = await pool.request()
        .input('id',mssqlU.Int,id)
        .input('username',mssqlU.VarChar(100),data.username)
        .input('password',mssqlU.VarChar(20),data.password)
        .input('correo',mssqlU.VarChar(100),data.correo)
        .input('puesto',mssqlU.VarChar(100),data.puesto)
        .input('nombre',mssqlU.VarChar(100),data.nombre_user)
        .input('apellido1',mssqlU.VarChar(100),data.apellido1)
        .input('apellido2',mssqlU.VarChar(100),data.apellido2)
        .input('no_colaborador',mssqlU.VarChar(50),data.no_colaborador)
        .input('departamento',mssqlU.Int,data.departamento)
        .input('tipo',mssqlU.Int,data.tipo_user)
        .query(sqlQueries.usuarioEdit);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para eliminar un usuario
const deleteUser = async (id) =>{
    try {
        let pool = await mssqlU.connect(keysU.sql);
        const sqlQueries = await utilsU.loadSqlQueries('usuario');
        const deleteU = await pool.request()
        .input('id',mssqlU.Int,id)
        .query(sqlQueries.usuarioDelete);
        return deleteU.recordset;
    } catch (error) {
        return error.message;
    }
}

//Exportando todos los metodos anteriores
module.exports={
    getUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}