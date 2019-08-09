const db = require('../database/index').getDB
class Note {
    constructor(title, body) {
        this.title = title
        this.body = body
    }
    saveNote() {
        // save note code here
    }
}

module.exports = Note