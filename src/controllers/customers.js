const { name } = require('ejs')
const res = require('express/lib/response')
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

async function list (req, res) {
    // trazendo lista de usuários do banco de dados para a view
    const users = await CustomersModel.find()

    res.render('list', {
        title: 'Listagem de usuários',
        users, // deixar vazio
    }) // criando rota para a view
}

async function formEdit(req, res) {

    const { id } = req.query

    const user = await CustomersModel.findById(id) // métod para procurar o id 

    res.render('edit', {
        title: 'Editar usuário',
        user,
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
        
    }= req.body

    const { id } = req.params

    const user = await CustomersModel.findById(id)
    
    user.name = name
    user.age = age
    user.email = email
    
    user.save()
    
    res.render('edit', {
        title: 'Editar Usuário',
        user,
        message: 'Usuário alterado com sucesso!'
    })
}

async function remove(req, res){
    const { id } = req.params

    const remove = await CustomersModel.deleteOne({ _id: id })

    if (remove.ok){
        res.redirect('/list')
    }
}
module.exports = {

    index,
    add,
    list,
    formEdit,
    edit,
    remove,
}