import { Link } from "react-router-dom";
import Songs from "../data/songs.json";

export const SongsList = ({ title }) => {
	const songs = Songs.songs;

	return (
		<>
			<h1>{title}</h1>
			<ul>
				{songs.map((song) => (
					<li key={song.rank}>
						<Link to={`/song/${song.title.toLowerCase().replace(/ /g, "-")}`}>
							{song.title} - {song.artist}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
