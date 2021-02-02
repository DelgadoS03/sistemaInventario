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
const fs = require('fs-extra');
const { join } = require('path');
const loadSqlQueries = (folderName) => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = join(process.cwd(), 'src', 'data', folderName);
    const files = yield fs.readdir(filePath);
    const sqlFiles = yield files.filter(f => f.endsWith('.sql'));
    const queries = {};
    for (const sqlFile of sqlFiles) {
        const query = yield fs.readFileSync(join(filePath, sqlFile), { encoding: "UTF-8" });
        queries[sqlFile.replace(".sql", "")] = query;
    }
    return queries;
});
module.exports = {
    loadSqlQueries
};
