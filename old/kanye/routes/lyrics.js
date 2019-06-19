var express = require('express');
var router = express.Router();

const { Client } = require('pg')
const client = new Client({
  database: 'hiphop'
})

client.connect()

const { getSongById } = require('../data/data-songs')(client);

router.get('/new', function(req, res, next) {
  res.render('lyric_new');
});

router.post('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/:id', function(req, res, next) {
  getSongById(req.params.id, (err, foundSong) => {
    if (err) {
      console.log('ERR', err)
    } else {
      let templateVars = {
        id: req.params.id,
        title: foundSong.title,
        lyrics: foundSong.lyrics
      }

      res.render('lyric', templateVars);  
    }
  })
});

router.get('/:id/edit', function(req, res, next) {
  getSongById(req.params.id, (err, foundSong) => {
    let templateVars = {
      id: req.params.id,
      title: foundSong.title,
      lyrics: foundSong.lyrics
    }
    
    res.render('lyric_edit', templateVars);
  })
});

router.post('/:id/edit', function(req, res, next) {
  res.redirect(`/lyrics/${req.params.id}`);
});

router.post('/:id/delete', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
