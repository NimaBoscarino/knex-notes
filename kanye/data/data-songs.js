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
        client.query('SELECT id, title FROM songs', (err, res) => {
            cb(err, res.rows)
        })        
    }
  
    function updateSongById(id, updateData, cb) {
        let lyric = updateData.edited_lyric
        client.query('UPDATE lyrics SET text = $1 WHERE id = $2', [lyric, id], (err, res) => {
            console.log(res.rows)
            cb(err, null)
        })
    }

    // function getSongs(cb) {
    //     knex.select('id', 'title').from('songs')
    //         .asCallback((err, res) => {
    //             cb(err, res)
    //         })
    // }
  
    return {
        getSongById,
        getSongs
    };
}

module.exports = makeSongsData;