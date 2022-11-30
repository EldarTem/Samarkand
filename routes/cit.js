var express = require('express');
var router = express.Router();
var City = require("../models/city").City
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с city');
});

/* Страница героев */
router.get('/:nick', function(req, res, next) {
  async.parallel([
          function(callback){
            City.findOne({nick:req.params.nick}, callback)
          },
          function(callback){
            City.find({},{_id:0,title:1,nick:1},callback)
          }
      ],
      function(err,result){
          if(err) return next(err)
          var city = result[0]
          var cit = result[1] || []
          if(!city) return next(new Error("Нет такого места на планете"))
          res.render('samarkand', {
              title: city.title,
              picture: city.avatar,
              desc: city.desc,
              menu: cit
          });
      })
})

module.exports = router;
