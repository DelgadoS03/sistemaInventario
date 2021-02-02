"use strict";
const dotenv = require('dotenv');
const assert = require('assert');
dotenv.config();
const sqlEncrypt = process.env.ENCRYPT === "true";
module.exports = {
    sql: {
        user: 'sa',
        database: 'inventarioRB',
        server: 'localhost',
        password: 'Sx3Jjg970113',
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    }
};
/*
export ={
    server: 'localhost',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me
            password: 'Sx3Jjg970113'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'inventarioRB'  //update me
    }
}

*/ 
