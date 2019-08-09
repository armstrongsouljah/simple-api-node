const Note =  require('../models/note')

exports.createNote = (req, res, next) => {
   const noteItem = new Note(title=req.body.title, body=req.body.body)
   noteItem.saveNote()
   res.status(201).json({
       'message': 'note created'
   })
}