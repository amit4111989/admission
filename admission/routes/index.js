var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Admission' ,   
      partials:
      {
        part: 'home.hjs',
      }
    });
});


router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Admission' ,   
      partials:
      {
        part: 'home.hjs',
      }
    });
});
module.exports = router;
