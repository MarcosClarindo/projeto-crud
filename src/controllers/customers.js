const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

// para uma possível manutenção modificar somente esta const
const defaultTitle = 'Cadasto de clientes'

function index (req, res) {
     res.render('register', {
         title: defaultTitle
     })
}

async function add(req, res){
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypt = await crypto(password)

    const resgister = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypt,
    })

    resgister.save()
    // renderizando a mensagem na página do formulário
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso!'
    })
}

async function listerUsers (req, res) {
    // trazendo lista de usuários do banco de dados para a view
    const users = await CustomersModel.find()

    res.render('listUsers', {
        title: 'Listagem de usuários',
        users, // deixar vazio
    }) // criando rota para a view
}
module.exports = {

    index,
    add,
    listerUsers,
}