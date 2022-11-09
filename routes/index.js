var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Карамельки */
router.get('/samarkand', function(req, res, next) {
  res.render('samar', {
      title: "Самарканд",
      picture: "images/samarkand.jpg",
      desc: "Тот самый город, в котором мечтает побывать каждый"
  });
});


/* Страница Карамельки */
router.get('/privoz', function(req, res, next) {
  res.render('samar', {
      title: "Привоз",
      picture: "images/privoz.jpg",
      desc: "Тот самое место, в котором мечтает побывать каждый, потому что в нем частичка Самарканда"
  });
});

/* Страница Карамельки */
router.get('/dzhankoy', function(req, res, next) {
  res.render('samar', {
      title: "Джанкой",
      picture: "images/dzhankoy.jpg",
      desc: "Тот самый город, в котором мечтает побывать каждый, потому что это крымский Самарканд"
  });
});

module.exports = router;

