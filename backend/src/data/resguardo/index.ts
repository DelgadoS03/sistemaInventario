const utilsR = require('../utils');
const keysR = require('../../config');
const mssqlR = require('mssql');

//metodo para listar los resguardos
const getResguardo = async () =>{
    try {
        let pool = await mssqlR.connect(keysR.sql);
        const sqlQueries = await utilsR.loadSqlQueries('resguardo');
        const list = await pool.request()
        .query(sqlQueries.resguardoList);
        return list.recordset;

    } catch (error) {
        return error.message;
    }
}

//metodo para listar un solo resguardo
const getOneResguardo = async (id) =>{
    try {
        let pool = await mssqlR.connect(keysR.sql);
        const sqlQueries = await utilsR.loadSqlQueries('resguardo');
        const listOne= await pool.request()
        .input('id',mssqlR.Int,id)
        .query(sqlQueries.resguardoOne);
        return listOne.recordset;
    } catch (error) {
        return error.message;
    }
}

//Metodo para crear un nuevo resguardo
const createResguardo = async (data) =>{
    try {
        let pool = await mssqlR.connect(keysR.sql);
        const sqlQueries = await utilsR.loadSqlQueries('resguardo');
        const insert = await pool.request()
        .input('fecha',mssqlR.Date,data.fecha)
        .input('observaciones',mssqlR.VarChar(200),data.observaciones)
        .input('documento',mssqlR.Text,data.documento)
        .input('usuario',mssqlR.Int,data.usuario)
        .input('persona',mssqlR.Int,data.persona)
        .query(sqlQueries.resguardoAdd);
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para actualizar/editar un resguardo
const updateResguardo = async (id,data)=>{
    try {
        let pool = await mssqlR.connect(keysR.sql);
        const sqlQueries = await utilsR.loadSqlQueries('resguardo');
        const update = await pool.request()
        .input('id',mssqlR.Int,id)
        .input('fecha',mssqlR.Date,data.fecha)
        .input('observaciones',mssqlR.VarChar(200),data.observaciones)
        .input('documento',mssqlR.Text,data.documento)
        .input('usuario',mssqlR.Int,data.usuario)
        .input('persona',mssqlR.Int,data.persona)
        .query(sqlQueries.resguardoEdit);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para eliminar un resguardo
const deleteResguardo = async (id) =>{
    try {
        let pool = await mssqlR.connect(keysR.sql);
        const sqlQueries = await utilsR.loadSqlQueries('resguardo');
        const deleteR = await pool.request()
        .input('id',mssqlR.Int,id)
        .query(sqlQueries.resguardoDelete);
        return deleteR.recordset;
    } catch (error) {
        return error.message;
    }
}

//Exportando todos los metodos anteriores
module.exports={
    getResguardo,
    getOneResguardo,
    createResguardo,
    updateResguardo,
    deleteResguardo
}