var knex = require('knex')({
    client: 'pg',
    connection: {
      database : 'knex_demo_hiphop'
    }
});

// knex('artists').insert({name: 'Jimothy Allan'})
//     .asCallback((err, res) => {
//         console.log(res)
//         // res.forEach(artist => console.log(artist.name))
//     })


//     // .asCallback((err, res) => {
//     //     if (err) {
//     //         console.log(err)
//     //     } else {
//     //         console.log(res)
//     //     }
//     // })
