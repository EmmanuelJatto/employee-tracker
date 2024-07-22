const { Pool} = require('pg');
const inquirer = require('inquirer');
require('dotenv').config();

const pool = new Pool(
    {
        user: DB_USER,
        password: DB_PASSWORD,
        host: 'localhost',
        database: DB_NAME
    },
    console.log(`Connected to the database.`)
)

pool.connect()

const promptUser = () => {
    
}