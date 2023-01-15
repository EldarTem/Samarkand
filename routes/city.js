var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с city');
});

/* Страница самаркандоподобных мест */
router.get('/:nick', function(req, res, next) {
  City.findOne({nick:req.params.nick}, function(err,city){
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
