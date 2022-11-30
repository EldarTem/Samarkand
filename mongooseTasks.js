var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')

var city = require("./models/city").city

var city = new city({
title: "Самарканд",
nick: "Samarkand"
})

console.log(city)
city.save(function(err, city, affected){
    console.log(city.title)
})