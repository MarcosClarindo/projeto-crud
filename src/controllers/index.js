const res = require("express/lib/response");


function index(req, res) {
    res.render('index', {
        title: 'Página Inicial!'
    })
}

module.exports = {
    index,
}