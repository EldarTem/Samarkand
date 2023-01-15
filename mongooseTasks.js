
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + ", salam")
}

var city = mongoose.model('city', schema)

var samar = new city({ name: 'Samarkand' })
samar.save(function (err) {
    samar.meow()
})