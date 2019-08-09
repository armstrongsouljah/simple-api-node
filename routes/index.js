const router = require('express').Router()
const noteController  = require('../controllers/noteControllers')
router.post('/note', noteController.createNote)

module.exports = router;
