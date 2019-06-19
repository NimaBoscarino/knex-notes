var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'dogs'
  }
});


knex.select('*').from('dogs').asCallback((err, artists) => {
  console.log(artists)
  // knex.destroy()
})
