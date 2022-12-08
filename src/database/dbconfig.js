const {createPool} = require("mysql2/promise");
const path = require("path");
const dotenv = require("dotenv");

// dotenv.config({ path: path.join("../")});

const db = createPool({
    host:"127.0.0.1",
    port: 3307,
    user: 'Joaquin2',
    password: "JuanDeLosPalotes123!",
    database: 'ecommerce_coder'
});

module.exports = {db}

