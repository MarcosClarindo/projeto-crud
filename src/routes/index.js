
const router = require('express').Router()

//const AuthController = require('../controllers/auth')
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// rotas
router.get('/', IndexController.index)

// registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// listar
router.get('/list', CustomersController.listerUsers)

module.exports = router