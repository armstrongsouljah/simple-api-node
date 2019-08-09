const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const {DATABASE_URI} = process.env
let _db

const mongoConnect = (callback) => {
  MongoClient.connect(DATABASE_URI)
    .then(client => {
        console.log('Connected')
        _db = client.db()
        callback()
    })
    .catch(error => {
        throw error
    })
}

const getDB = () => {
    if(_db){
        return _db;
    } throw "No connection"
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;

