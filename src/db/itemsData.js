const database = require('./database');

exports.getItems = function () {
    return database.any('SELECT * FROM items');
}
