const utilsD = require('../utils');
const keysD = require('../../config');
const mssqlD = require('mssql');
//metodo para listar departamentos
const getDepartamento = async () =>{
    try {
        let pool = await mssqlD.connect(keysD.sql);
        const sqlQueries = await utilsD.loadSqlQueries('departamento');
        const list = await pool.request().query(sqlQueries.departamentoList);
        return list.recordset;

    } catch (error) {
        return error.message;
    }
}

//metodo para listar un departamento
const getOneDepartamento = async (id) =>{
    try {
        let pool = await mssqlD.connect(keysD.sql);
        const sqlQueries = await utilsD.loadSqlQueries('departamento');
        const listOne = await pool.request()
        .input('id',mssqlD.Int,id)
        .query(sqlQueries.departamentoOne);
        return listOne.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para crear un departamento
const createDepartamento = async (data) =>{
    try {
        let pool = await mssqlD.connect(keysD.sql);
        const sqlQueries = await utilsD.loadSqlQueries('departamento');
        const insert = await pool.request()
        .input('nombre',mssqlD.VarChar(100),data.nombre_dep)
        .input('clave',mssqlD.VarChar(100),data.clave)
        .query(sqlQueries.departamentoAdd);
        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

//Metodo para actualizar/editar un departamento
const updateDepartamento = async (id,data)=>{
    try {
        let pool = await mssqlD.connect(keysD.sql);
        const sqlQueries = await utilsD.loadSqlQueries('departamento');
        const update = await pool.request()
        .input('id',mssqlD.Int,id)
        .input('nombre',mssqlD.VarChar(100),data.nombre_dep)
        .input('clave',mssqlD.VarChar(100),data.clave)
        .query(sqlQueries.departamentoEdit);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

//Metodo para eliminar un departamento
const deleteDepartamento = async (id) =>{
    try {
        let pool = await mssqlD.connect(keysD.sql);
        const sqlQueries = await utilsD.loadSqlQueries('departamento');
        const deleteD = await pool.request()
        .input('id',mssqlD.Int,id)
        .query(sqlQueries.departamentoDelete);
        return deleteD.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports={
    getDepartamento,
    getOneDepartamento,
    createDepartamento,
    updateDepartamento,
    deleteDepartamento
}