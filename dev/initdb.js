const { Pool, Client } = require('pg')
const config = require('../src/config.js');

config.initConfig();

const fs = require('fs');

const readSQLFile = (filename) => {
    return fs.readFileSync(filename, 'utf8');
}

const readJsonFile = (filename) => {
    let rawdata = fs.readFileSync(filename);
    return JSON.parse(rawdata);
}

const initDb = async () => {

    let createTables = readSQLFile('./assets/create_tables.sql');
    
    let cities = readJsonFile('./assets/city.json');
    let routes = readJsonFile('./assets/route.json');
    
    // you can also use async/await
    const pool = new Pool()

    await pool.query(createTables);

    await pool.query('DELETE FROM ROUTE;');
    await pool.query('DELETE FROM CITY;');
    
    for(let i = 0; i < cities.length; i++) {
        let city = cities[i];
        let query = `INSERT INTO CITY (name, code, x, y) VALUES ('${city.Name}', '${city.Code}', ${city.x}, ${city.y})`;
        console.log(query);
        await pool.query(query);
    }

    for(let i = 0; i < routes.length; i++) {
        let route = routes[i];
        let query = `INSERT INTO ROUTE (begin_city_code, end_city_code, distance) VALUES ('${route.Begin}', '${route.End}', ${route.Distance})`;
        console.log(query);
        await pool.query(query);
    }

    await pool.end()
    
}

initDb();