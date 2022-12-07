var express = require('express');
var router = express.Router();
var City = require("../models/citys").City

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с city');
});

/* Страница городов*/
router.get('/:nick', function(req, res, next) {
    City.findOne({nick:req.params.nick}, function(err, city){
          if(err) return next(err)
          if(!city) return next(new Error("Нет такого города"))
          res.render('samarkand', {
              title: city.title,
              picture: city.avatar,
              desc: city.desc,
          })
      })
  })

module.exports = router;
