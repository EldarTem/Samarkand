
var express = require('express');
var router = express.Router();
var city = require('../models/city').city;

/* Страница самаркандоподобных мест */
router.get('/:nick', function(req, res, next) {
  сity.findOne({nick:req.params.nick}, function(err,city){
      if(err) return next(err)
      if(!city) return next(new Error("Нет такого города в этом мультике"))
      res.render('city', {
          title: city.title,
          picture: city.avatar,
          desc: city.desc
      })
  })
})


module.exports = router;
