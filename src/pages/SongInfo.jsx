// TODO: Import necessary modules and data
import { Link, useParams } from "react-router-dom"
import songsData from "../data/songs.json"

// TODO: Destrcutrue props to receive information coming in from the parent comp


function SongInfo() {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  const { songTitle } = useParams();

  const songInfo = songsData.songs.find(
    (song) => song.title.toLowerCase().replace(/ /g, "-") === songTitle
  )

  if (!songInfo)
    return (
      <>
        <p>Song not found</p>
        <Link to="/">Go Home</Link>
      </>
    )

  return (
    <>
      <div className="card">
        {/* TODO: Display song details or a "Song not found!" message */}
        <h3>Title</h3>
        <p>{songInfo.title}</p>
        <h3>Artist</h3>
        <p>{songInfo.artist}</p>
        <h3>Album Name</h3>
        <p>{songInfo.album}</p>
        <h3>Year</h3>
        <p>{songInfo.year}</p>
      </div>
    </>
  );
}

export default SongInfo;