"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql = require('mssql');
const keys_1 = __importDefault(require("./keys"));
const pool = new mssql.ConnectionPool(keys_1.default)
    .connect()
    .then(pool => {
    console.log('Base de datos conectada');
    return pool;
})
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));
module.exports = {
    mssql, pool
};
