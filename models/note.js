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
    static  async listNotes () {
        let db = getDB()
        return await db.collection('items').find().toArray().then(
            result => {
                return result
            }
        ).catch(error => {
            throw error
        })
    }
}

module.exports = Note