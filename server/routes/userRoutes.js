const router = require('express').Router()
const userController = require('../controllers/userController')
const { validationCheck } = require('../middlewares/dataCheckMiddleware')
const { tokenMiddleware } = require('../middlewares/tokenMiddleware')
const { adminMiddleware } = require('../middlewares/tokenMiddleware')

router.post('/register', validationCheck, userController.register)
router.post('/login', validationCheck, userController.login)
router.get('/getUserProfile', tokenMiddleware, userController.getUserProfile)
router.get('/getUsers', tokenMiddleware, adminMiddleware, userController.getUsers)
router.delete('/getDeleteUsers/:id',tokenMiddleware, adminMiddleware, userController.deleteUser);
router.put('/getUpdateUsers/:id',tokenMiddleware, adminMiddleware, userController.updateUser);
  
module.exports = router