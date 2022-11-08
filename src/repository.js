const { Pool, Client } = require('pg')

const getCities = async () => {
    const pool = new Pool()
    const poolResult = await pool.query('SELECT * FROM CITY')
    await pool.end()
    return poolResult.rows
}

const findCity = async (name) => {
    const pool = new Pool()
    const poolResult = await pool.query(`SELECT * FROM CITY WHERE name like '%${name}%'`)
    await pool.end()
    return poolResult.rows
}

module.exports = { getCities, findCity }