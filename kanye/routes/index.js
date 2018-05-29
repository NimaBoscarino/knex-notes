var express = require('express');
var router = express.Router();

const { Client } = require('pg')
const client = new Client({
  database: 'hiphop'
})

client.connect()

const { getSongs } = require('../data/data-songs')(client);

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
