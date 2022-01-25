const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

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
    res.send('Cadastro realizado!')
}

module.exports = {
    add
}