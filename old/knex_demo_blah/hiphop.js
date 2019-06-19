var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'hippity_hop'
  }
});

const getArtists = () => {
  knex.select('*').from('artists').asCallback((err, artists) => {
    console.log('Artists', artists)
  
    artists.forEach(artist => {
      console.log('I like listening to ', artist.name)
    })
  
    // knex.destroy()
  })  
}

const getSongsByArtistId = (artistID) => {
  return knex.select('*')
      .from('songs')
      .where('artist_id', artistID)
      // .asCallback((err, songs) => {      
      //   songs.forEach(song => {
      //     console.log('Song:', song.title)
      // })
  // })  
}

getSongsByArtistId(1).then(songs => {
  songs.forEach(song => {
      console.log('Song:', song.title)
  })
})

getSongsByArtistId(1).then(songs => console.log(songs.length))

