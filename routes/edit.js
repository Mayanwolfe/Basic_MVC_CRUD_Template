const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteTask)
router.post('/update/:id', editController.updateTask)


module.exports = router