var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')

var City = require("./models/sam").City

var city = new City({
title: "Самарканд",
nick: "Samarkand"
})

console.log(city)
city.save(function(err, city, affected){
    console.log(city.title)
})
//var mongoose = require('mongoose')
//mongoose.connect('mongodb://127.0.0.1:27017/test1')
//
//var schema = mongoose.Schema({ name: String })
//
//schema.methods.meow = function(){
//    console.log(this.get("name") + ", salam")
//}
//
//var city = mongoose.model('city', schema)
//
//var samar = new city({ name: 'Samarkand' })
//samar.save(function (err) {
//    samar.meow()
//})