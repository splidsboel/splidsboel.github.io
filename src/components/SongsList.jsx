import { useState, useEffect } from "react";
import axios from "axios";

const SongsList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/songs")
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error("Error fetching songs:", error);
      });
  }, []);

  return (
    <div>
      <h2>Song List: </h2>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title} - {song.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;