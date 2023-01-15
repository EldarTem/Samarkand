var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var city = mongoose.model('city', { name: String })

var samar = new city({ name: 'Самарканд' })
samar.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Hello Uzbekistan!')
    }
})