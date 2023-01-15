var mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/test1')

var Сity = require("./models/sam").Сity

var city = new Сity({
title: "Самарканд",
nick: "Samarkand"
})

console.log(city)
city.save(function(err, city, affected){
    console.log(city.title)
})