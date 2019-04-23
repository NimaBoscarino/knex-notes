var knex = require('knex')({
    client: 'pg',
    connection: {
      database : 'hiphop'
    }
});

knex.select('name').from('artists')
    .asCallback((err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log(res)
        }
    })

knex.insert([{name: 'Billy'}], '*').into('artists')
    .asCallback((err, res) => {
        err ? console.log(err) : console.log(res)
        knex.select('name').from('artists')
        .asCallback((err, res) => {
            if (err) {
                console.log("error:", err)
            } else {
                console.log(res)
            }
        })
    
    })



