var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Самарканд */
router.get('/samarkand', function(req, res, next) {
  res.render('city', {
      title: "Самарканд",
      picture: "images/samarkand.jpg",
      desc: "Тот самый город, в котором мечтает побывать каждый"
  });
});

/* Страница Привоз */
router.get('/privoz', function(req, res, next) {
  res.render('city', {
      title: "Привоз",
      picture: "images/privoz.jpg",
      desc: "Тот самое место, в котором мечтает побывать каждый, потому что в нем частичка Самарканда"
  });
});

/* Страница Джанкой*/
router.get('/dzhankoy', function(req, res, next) {
  res.render('city', {
      title: "Джанкой",
      picture: "images/dzhankoy.jpg",
      desc: "Тот самый город, в котором мечтает побывать каждый, потому что это крымский Самарканд"
  });
});

module.exports = router;

