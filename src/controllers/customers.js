const CustomersController = require('../models/customers')

function add(req, res){
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const resgister = new CustomersController({
        name,
        age,
        email,
        password,
    })

    resgister.save()
    res.send('Cadastro realizado!')
}

module.exports = {
    add
}