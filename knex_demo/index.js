var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'hippity_hop'
  }
});

// SELECT * FROM artists
knex.select('*').from('artists').asCallback((err, artists) => {
  artists.forEach(artist => {
    // get all the songs for the artist

    knex('songs').where({
      artist_id: artist.id,
    }).select('title').then((titles) => {
      console.log('haha!', artist.name)
      console.log(titles)
    })

  })
})


knex.select('*').from('artists').asCallback((err, artists) => {
  console.log(artists)
  knex.destroy()
})
