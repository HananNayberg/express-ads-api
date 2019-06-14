const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');

let database = null;

// initialize the in-memory database
async function startDatabase() {

    const mongo = new MongoMemoryServer();

    const mongoDBURL = await mongo.getConnectionString();

    const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true});

    database = connection.db();
}

//returns a reference to db
async function getDatabase() {

    if (!database) await startDatabase();

    return database;

}

module.exports = {

    getDatabase,

    startDatabase,
};