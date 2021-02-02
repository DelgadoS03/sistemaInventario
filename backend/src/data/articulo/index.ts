const utils = require('../utils');
const keys = require('../../config');
const mssql = require('mssql');

//metodo para listar los articulos
const getArticulo = async () =>{
    try {
        let pool = await mssql.connect(keys.sql);
        const sqlQueries = await utils.loadSqlQueries('articulo');
        const list = await pool.request().query(sqlQueries.articulolist);
        return list.recordset;

    } catch (error) {
        return error.message;
    }
}

//metodo para listar un solo articulo
const getOneArticulo = async (id) =>{
    try {
        let pool = await mssql.connect(keys.sql);
        const sqlQueries = await utils.loadSqlQueries('articulo');
        const oneArticulo= await pool.request()
        .input('id',mssql.Int,id)
        .query(sqlQueries.articulolistone);
        return oneArticulo.recordset;
    } catch (error) {
        return error.message;
    }
}

//Metodo para crear un nuevo articulo
const createArticulo = async (data) =>{
    try {
        let pool = await mssql.connect(keys.sql);
        const sqlQueries = await utils.loadSqlQueries('articulo');
        const insertArticulo = await pool.request()
        .input('nombre',mssql.VarChar(100),data.nombre_art)
        .input('marca',mssql.VarChar(100),data.marca)
        .input('modelo',mssql.VarChar(100),data.modelo)
        .input('no_serie',mssql.VarChar(50),data.no_serie)
        .input('no_inventario',mssql.VarChar(50),data.no_inventario)
        .input('cantidad',mssql.Int,data.cantidad)
        .input('descripcion',mssql.Text,data.descripcion)
        .input('localizacion',mssql.Text,data.localizacion)
        .input('imagen',mssql.Text,data.imagen)
        .input('categoria',mssql.Int,data.categoria)
        .query(sqlQueries.articuloadd);
        return insertArticulo.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para actualizar/editar un articulo
const updateArticulo = async (id,data)=>{
    try {
        let pool = await mssql.connect(keys.sql);
        const sqlQueries = await utils.loadSqlQueries('articulo');
        const updateArticulo = await pool.request()
        .input('id',mssql.Int,id)
        .input('nombre',mssql.VarChar(100),data.nombre_art)
        .input('marca',mssql.VarChar(100),data.marca)
        .input('modelo',mssql.VarChar(100),data.modelo)
        .input('no_serie',mssql.VarChar(50),data.no_serie)
        .input('no_inventario',mssql.VarChar(50),data.no_inventario)
        .input('cantidad',mssql.Int,data.cantidad)
        .input('descripcion',mssql.Text,data.descripcion)
        .input('localizacion',mssql.Text,data.localizacion)
        .input('imagen',mssql.Text,data.imagen)
        .input('categoria',mssql.Int,data.categoria)
        .query(sqlQueries.articuloedit);
        return updateArticulo.recordset;
    } catch (error) {
        return error.message;
    }
}

//metodo para eliminar un articulo
const deleteArticulo = async (id) =>{
    try {
        let pool = await mssql.connect(keys.sql);
        const sqlQueries = await utils.loadSqlQueries('articulo');
        const deleteArticulo = await pool.request()
        .input('id',mssql.Int,id)
        .query(sqlQueries.articulodelete);
        return deleteArticulo.recordset;
    } catch (error) {
        return error.message;
    }
}

//Exportando todos los metodos anteriores
module.exports={
    getArticulo,
    getOneArticulo,
    createArticulo,
    updateArticulo,
    deleteArticulo
}