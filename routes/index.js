const router = require('express').Router()
const noteController  = require('../controllers/noteControllers')

router.post('/note', noteController.createNote)
router.get('/notes', noteController.fetchAllNotes)

module.exports = router;
