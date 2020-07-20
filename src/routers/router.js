const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.renderHomePage)
router.get('/space', controller.renderspace)
router.get('/yharah', controller.renderYharah)
router.get('/academy', controller.renderAcademy)
router.get('/contact', controller.renderContact)
router.get('/about', controller.renderAbout)
// router.get('/index2', controller.renderIndex2)

module.exports = router;