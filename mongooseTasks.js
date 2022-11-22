var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/')

var city = mongoose.model('city', { name: String })

var samar = new city({ name: 'Самарканд' })
samar.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Hello Uzbekistan!')
    }
})