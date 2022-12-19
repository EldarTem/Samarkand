var express = require('express');
var router = express.Router();
var checkAuth = require("./../middleware/checkAuth.js")
var City = require("../models/city").City
var User = require("./../models/user").User


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express', menu: menu, counter: req.session.counter });
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{error:null});
  });
  
/* POST login/registration page. */
router.post('/logreg', function (req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({ username: username }, function (err, user) {
    if (err) return next(err)
    if (user) {
      if (user.checkPassword(password)) {
        req.session.user = user._id
        res.redirect('/')
      } else {
        res.render('logreg',{error:"Пароль не верный"});
      }
    } else {
      var user = new User({ username: username, password: password })
      user.save(function (err, user) {
        if (err) return next(err)
        req.session.user = user._id
        res.redirect('/')
      })
    }
  })
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null
  res.redirect('/')
});

/*
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Самарканд 
router.get('/samarkand', function(req, res, next) {
  res.render('samar', {
      title: "Самарканд",
      picture: "images/samarkand.jpg",
      desc: "Тот самый город, в котором мечтает побывать каждый"
  });
});
/* Страница Привоз 
router.get('/privoz', function(req, res, next) {
  res.render('samar', {
      title: "Привоз",
      picture: "images/privoz.jpg",
      desc: "Тот самое место, в котором мечтает побывать каждый, потому что в нем частичка Самарканда"
  });
});

/* Страница Джанкой
router.get('/dzhankoy', function(req, res, next) {
  res.render('samar', {
      title: "Джанкой",
      picture: "images/dzhankoy.jpg",
      desc: "Тот самый город, в котором мечтает побывать каждый, потому что это крымский Самарканд"
  });
});
*/
module.exports = router;

