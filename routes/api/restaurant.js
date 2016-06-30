var express = require('express');
var router = express.Router();
var Restaurant = require('../../models/restaurant');
var Place = require('../../models/place');
var Promise = require('bluebird');

router.get('/restaurants' , function (req, res, next) {
  var findingRestaurants = Restaurant.findAll({
    include: [Place]
  });

  findingRestaurants.then(function(result){
    res.send(result);
  });

});

module.exports = router;
