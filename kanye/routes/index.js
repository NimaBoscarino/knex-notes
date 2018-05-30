var express = require('express');
var router = express.Router();

const config = require('../knexfile')['development']
const knex = require('knex')(config)

const { getSongs } = require('../data/data-songs')(knex);

/* GET home page. */
router.get('/', function(req, res, next) {
  getSongs((err, songs) => {
    if (err) {
      console.log('ERR:', err)
    } else {
      res.render('index', {
        songs: songs
      })  
    }
  })
});

module.exports = router;
