const getDB = require('../database/index').getDB
class Note {
    constructor(title, body) {
        this.title = title
        this.body = body
    }
    saveNote() {
        let db = getDB()
        if(!db.collection('items')){
            db.createCollection('items')
        }
        db.collection('items').insertOne(this)
         .then(result => {
             console.log(result)
         })
         .catch(error => {
             throw error
         })
    }
    static listNotes () {
        let db = getDB()
        return db.collection('items').find().toArray().then(
            result => {
                return result
            }
        ).catch(error => {
            throw error
        })
    }
    static deleteNote(query, callback) {
        let db = getDB()
        return db.collection('items').deleteOne(query, (err, result) => {
            if(err) throw err
            callback(result)
        })
    }
    static fetchNote(query) {
        let db = getDB()
        return db.collection('items').findOne(query).then(
            result => result
        ).catch(err => {
            throw err
        })
    }
}

module.exports = Note