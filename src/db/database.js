const pgp = require('pg-promise');

module.exports = pgp()("postgres://postgres:root@localhost:5432/app");
