const utilsT = require('../utils');
const keysT = require('../../config');
const mssqlT = require('mssql');
//metodo para listar los tipos de usuarios
const getTipo_user = async () =>{
    try {
        let pool = await mssqlT.connect(keysT.sql);
        const sqlQueries = await utilsT.loadSqlQueries('tipo_user');
        const list = await pool.request().query(sqlQueries.tipo_userList);
        return list.recordset;

    } catch (error) {
        return error.message;
    }
}

//metodo para listar un tipo de usuario
const getOneTipo_user = async (id) =>{
    try {
        let pool = await mssqlT.connect(keysT.sql);
        const sqlQueries = await utilsT.loadSqlQueries('tipo_user');
        const listOne = await pool.request()
        .input('id',mssqlT.Int,id)
        .query(sqlQueries.tipo_userOne);
        return listOne.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para crear un tipo de usuario
const createTipo_user = async (data) =>{
    try {
        let pool = await mssqlT.connect(keysT.sql);
        const sqlQueries = await utilsT.loadSqlQueries('tipo_user');
        const insert = await pool.request()
        .input('tipo',mssqlT.VarChar(50),data.rol_usuario)
        .query(sqlQueries.tipo_userAdd);
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

//Metodo para actualizar/editar un tipo de usuario
const updateTipo_user = async (id,data)=>{
    try {
        let pool = await mssqlT.connect(keysT.sql);
        const sqlQueries = await utilsT.loadSqlQueries('tipo_user');
        const update = await pool.request()
        .input('id',mssqlT.Int,id)
        .input('tipo',mssqlT.VarChar(50),data.rol_usuario)
        .query(sqlQueries.tipo_userEdit);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

//Metodo para eliminar un tipo de usuario
const deleteTipo_user = async (id) =>{
    try {
        let pool = await mssqlT.connect(keysT.sql);
        const sqlQueries = await utilsT.loadSqlQueries('tipo_user');
        const deleteT = await pool.request()
        .input('id',mssqlT.Int,id)
        .query(sqlQueries.tipo_userDelete);
        return deleteT.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports={
    getTipo_user,
    getOneTipo_user,
    createTipo_user,
    updateTipo_user,
    deleteTipo_user
}