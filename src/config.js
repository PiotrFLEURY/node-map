const dotenv = require('dotenv');

const initConfig = () => {

    dotenv.config();
    console.log(`Postgres host is ${process.env.PGHOST}`);
    console.log(`Postgres user is ${process.env.PGUSER}`);
    console.log(`Postgres database is ${process.env.PGDATABASE}`);
    console.log(`Postgres port is ${process.env.PGPORT}`);

}

module.exports = { initConfig };