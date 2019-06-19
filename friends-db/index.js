var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'friendsdatabase' // DONT HAVE CAPS IN HERE
    // KEEP THIS LOWERCASE
  }
});

knex.select('*').from('friends').asCallback((err, friends) => {
  console.log(err)
  console.log('friends', friends)
})  

knex.select('*').from('relations').asCallback((err, relations) => {
  console.log(err)
  console.log('relations', relations)
})  

knex.table('friends').innerJoin('relations', 'friends.id', '=', 'relations.friend_a').asCallback((err, friends) => {
  console.log(err)
  console.log('relations where friend A', friends)
})