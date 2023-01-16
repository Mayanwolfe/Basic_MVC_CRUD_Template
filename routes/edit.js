const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteItem)
router.post('/update/:id', editController.updateItem)


module.exports = router