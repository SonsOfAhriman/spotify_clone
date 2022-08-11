import "./Main.css";
import { useEffect, useState } from "react";

import spotifyApiCall from "../api/spotifyApiCall";

import MainContainer from "./MainContainer";

function Main() {
  const [tracks, setTracks] = useState({});
  const [totalResponse, setTotalResponse] = useState(null);

  const [moodTracks, setMoodTracks] = useState({});
  const [moodTotalResponse, setMoodTotalResponse] = useState(null);

  const [jazzTracks, setJazzTracks] = useState({});
  const [jazzTotalResponse, setJazzTotalResponse] = useState(null);

  useEffect(() => {
    spotifyApiCall("/playlists/37i9dQZF1DX4sWSpwq3LiO").then((response) => {
      setTotalResponse(response);
      setTracks(response.tracks);
    });
    spotifyApiCall("/playlists/37i9dQZF1DXbShqaetC9Tw").then((response) => {
      setMoodTotalResponse(response);
      setMoodTracks(response.tracks);
    });
    spotifyApiCall("/playlists/37i9dQZF1DX8wWHvPMMfNA").then((response) => {
      setJazzTotalResponse(response);
      setJazzTracks(response.tracks);
    });
  }, []);

  return (
    <div className="App">
      <div className="main-grid">
        <MainContainer
          mainHeader="Focus"
          secondHeader="Music to help you concentrate"
          totalResponse={totalResponse}
          tracks={tracks}
        />
        <MainContainer
          mainHeader="Mood"
          secondHeader="Playlists to match your mood"
          totalResponse={moodTotalResponse}
          tracks={moodTracks}
        />
        <MainContainer
          mainHeader="Jazz"
          secondHeader="Soft instrumental jazz for your focus time"
          totalResponse={jazzTotalResponse}
          tracks={jazzTracks}
        />
      </div>
    </div>
  );
}

export default Main;
