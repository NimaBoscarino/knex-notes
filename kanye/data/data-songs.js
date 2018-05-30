function makeSongsData(knex) {
  
    function getSongById(id, cb) {
        // knex.select('*').from('songs')
        client.query('SELECT * from songs inner join lyrics on lyrics.id = songs.lyric_id WHERE songs.id = $1 LIMIT 1', [id], (err, res) => {
            let foundRawSong = res.rows[0]
            let foundSong = {
                id: foundRawSong.id,
                title: foundRawSong.title,
                lyrics: foundRawSong.text
            }

            // console.log(foundSong.lyrics)

            cb(err, foundSong)
        })        
    }


    function getSongs(cb) {
        knex.select('id', 'title').from('songs')
            .asCallback((err, res) => {
                cb(err, res)
            })
    }
  
    return {
        getSongById,
        getSongs
    };
}

module.exports = makeSongsData;