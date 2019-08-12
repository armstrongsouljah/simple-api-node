const Note =  require('../models/note')

exports.createNote = (req, res, next) => {
   const noteItem = new Note(title=req.body.title, body=req.body.body)
   noteItem.saveNote()
   res.status(201).json({
       'message': 'note created'
   })
}

exports.fetchAllNotes = (req, res, next) => {
    Note.listNotes()
     .then(items => {
         res.status(200).json({
             'notes': items
         })
     })
    
}

exports.removeNote = (req, res, next) => {
    Note.deleteNote({
        'title': req.body.title
    }, (item) => {
       if(item.deletedCount == 0) {
           res.status(404).json({
               success: false,
               message: 'Item not found'
           })
       }
       res.status(204).json({
        'success': true,
        'message': "Item successfully deleted"
    })
    })
    
}