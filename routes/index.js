const router = require('express').Router()
const noteController  = require('../controllers/noteControllers')

router.post('/note', noteController.createNote)
router.get('/notes', noteController.fetchAllNotes)
router.delete('/note', noteController.removeNote)

module.exports = router;
