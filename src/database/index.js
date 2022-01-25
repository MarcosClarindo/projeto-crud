const mongoose = require('mongoose')

function connect(){

   // mongoose.set('useNewUrlParser', true)
    //mongoose.set('useUnifiedTopology', true)
    
    mongoose.connect('mongodb://localhost:27017/projeto-crud?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
    
    // conectando ao mongoDB
    const db = mongoose.connection 
    
    // conectando ao mongDB
    db.once('open', () => {
        console.log('Connected to database!') 
    })
    
    db.on('error', console.error.bind(console, 'connection error: ')) // menssagem de error

}

module.exports = {
    connect
}