const knex = require('knex');

const connectionWithKnex = knex({
    client:'sqlite3',
    connection:{

        filename:'./data.sqlite'
    },
    useNullAsDefault: true
});

module.exports = connectionWithKnex;