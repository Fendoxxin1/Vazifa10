import path from "node:path";
import db from "./index.js";
import {readFileSync } from 'node:fs';

function initDB() {
    try {
        const file = path.join('src/db/init.sql');
        const sql = readFileSync(file, 'utf-8');
        db.query(sql);
        console.log('Tables created successfully');
    } catch (error) {
        console.log(error);
    }
}

initDB();