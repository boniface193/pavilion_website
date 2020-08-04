const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.renderHomePage)
router.get('/space', controller.renderspace)
router.get('/academy', controller.renderAcademy)
router.get('/contact', controller.renderContact)
router.get('/about', controller.renderAbout)

module.exports = router;