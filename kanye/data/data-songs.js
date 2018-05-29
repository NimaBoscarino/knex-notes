const songDb = [
    {
      title: "old macdonald",
      id: 1,
      lyrics: "had a farm!"
    },
    {
      title: "row row row your boat",
      id: 2,
      lyrics: "gently down the stream"
    },
    {
      title: "baa baa black sheep",
      id: 3,
      lyrics: "have you any wool"
    },
]

function makeSongsData(client) {
  
    function getSongById(id, cb) {
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
  
    return {
        getSongById,
        getSongs
    };
}

module.exports = makeSongsData;