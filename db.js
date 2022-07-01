const Pool = require('pg').Pool

const pool = new Pool({
    user: 'kjqxewszuqbbrn',
    password: 'b05d06bd24e67348f36d791d3c1c9f63bbc6635e6933ab9140deeb564033a1e4',
    host:'ec2-52-49-120-150.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd2mktcbcqe884o',
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
