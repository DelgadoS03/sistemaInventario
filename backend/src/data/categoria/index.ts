const utilsC = require('../utils');
const keysC = require('../../config');
const mssqlC = require('mssql');
//metodo para listar categorias
const getCategoria = async () =>{
    try {
        let pool = await mssqlC.connect(keysC.sql);
        const sqlQueries = await utilsC.loadSqlQueries('categoria');
        const list = await pool.request().query(sqlQueries.categoriaList);
        return list.recordset;

    } catch (error) {
        return error.message;
    }
}

//metodo para listar una categoria
const getOneCategoria = async (id) =>{
    try {
        let pool = await mssqlC.connect(keysC.sql);
        const sqlQueries = await utilsC.loadSqlQueries('categoria');
        const listOne = await pool.request()
        .input('id',mssqlC.Int,id)
        .query(sqlQueries.categoriaOne);
        return listOne.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para crear una categoria
const createCategoria = async (data) =>{
    try {
        let pool = await mssqlC.connect(keysC.sql);
        const sqlQueries = await utilsC.loadSqlQueries('categoria');
        const insertCategoria = await pool.request()
        .input('nombre',mssqlC.VarChar(100),data.nombre_cat)
        .query(sqlQueries.categoriaAdd);
        return insertCategoria.recordset;
    } catch (error) {
        return error.message;
    }
}

//Metodo para actualizar/editar una categoria
const updateCategoria = async (id,data)=>{
    try {
        let pool = await mssqlC.connect(keysC.sql);
        const sqlQueries = await utilsC.loadSqlQueries('categoria');
        const updateCategoria = await pool.request()
        .input('id',mssqlC.Int,id)
        .input('nombre',mssqlC.VarChar(100),data.nombre_cat)
        .query(sqlQueries.categoriaEdit);
        return updateCategoria.recordset;
    } catch (error) {
        return error.message;
    }
}

//Metodo para eliminar una categoria
const deleteCategoria = async (id) =>{
    try {
        let pool = await mssqlC.connect(keysC.sql);
        const sqlQueries = await utilsC.loadSqlQueries('categoria');
        const deleteCategoria = await pool.request()
        .input('id',mssqlC.Int,id)
        .query(sqlQueries.categoriaDelete);
        return deleteCategoria.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports={
    getCategoria,
    getOneCategoria,
    createCategoria,
    updateCategoria,
    deleteCategoria
}