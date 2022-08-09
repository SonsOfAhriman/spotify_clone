import "./Main.css";
import { useEffect, useState } from "react";
import spotifyApiCall from "../api/spotifyApiCall";
import { Link } from "react-router-dom";

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
        <div className="main-component">
          <div style={{ display: "flex" }}>
            <div className="group-header">
              <a href={() => false}>Focus</a>
              <p>Music to help you concentrate</p>
            </div>
            {totalResponse ? (
              <Link
                className="see-all"
                to={`/playlists/${totalResponse?.id}`}
                state={{ header: "Focus" }}
              >
                SEE ALL
              </Link>
            ) : (
              <a href={() => false} className="see-all">
                SEE ALL
              </a>
            )}
          </div>
          <div className="grid-container">
            {tracks?.items?.slice(0, 5).map((track, index) => (
              <div key={index} className="grid-item">
                <div className="card">
                  <div className="poster">
                    <img src={track?.track?.album?.images[0].url} alt="album" />
                  </div>
                  <div className="card-info">
                    <a
                      href={() => false}
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        color: "#FEFEFE",
                        width: "200px",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      className="title"
                    >
                      {track.track.name}
                    </a>
                    <a
                      href={() => false}
                      style={{
                        fontWeight: "600",
                        textDecoration: "none",
                        marginBottom: "28px",
                        color: "#B3B3B3",
                        width: "200px",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      className="title"
                    >
                      {track.track.album.artists[0].name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="main-component">
          <div style={{ display: "flex" }}>
            <div className="group-header">
              <a href={() => false}>Mood</a>
              <p>Playlists to match your mood</p>
            </div>
            {moodTotalResponse ? (
              <Link
                className="see-all"
                to={`/playlists/${moodTotalResponse?.id}`}
                state={{ header: "Mood" }}
              >
                SEE ALL
              </Link>
            ) : (
              <a href={() => false} className="see-all">
                SEE ALL
              </a>
            )}
          </div>
          <div className="grid-container">
            {moodTracks?.items?.slice(0, 5).map((track, index) => (
              <div key={index} className="grid-item">
                <div className="card">
                  <div className="poster">
                    <img src={track?.track?.album?.images[0].url} alt="album" />
                  </div>
                  <div className="card-info">
                    <a
                      href={() => false}
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        color: "#FEFEFE",
                        width: "200px",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      className="title"
                    >
                      {track.track.name}
                    </a>
                    <a
                      href={() => false}
                      style={{
                        fontWeight: "600",
                        textDecoration: "none",
                        marginBottom: "28px",
                        color: "#B3B3B3",
                        width: "200px",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      className="title"
                    >
                      {track.track.album.artists[0].name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="main-component">
          <div style={{ display: "flex" }}>
            <div className="group-header">
              <a href={() => false}>Jazz</a>
              <p>Soft instrumental jazz for your focus time</p>
            </div>
            {jazzTotalResponse ? (
              <Link
                className="see-all"
                to={`/playlists/${jazzTotalResponse?.id}`}
                state={{ header: "Jazz" }}
              >
                SEE ALL
              </Link>
            ) : (
              <a href={() => false} className="see-all">
                SEE ALL
              </a>
            )}
          </div>
          <div className="grid-container">
            {jazzTracks?.items?.slice(0, 5).map((track, index) => (
              <div key={index} className="grid-item">
                <div className="card">
                  <div className="poster">
                    <img src={track?.track?.album?.images[0].url} alt="album" />
                  </div>
                  <div className="card-info">
                    <a
                      href={() => false}
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        color: "#FEFEFE",
                        width: "200px",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      className="title"
                    >
                      {track.track.name}
                    </a>
                    <a
                      href={() => false}
                      style={{
                        fontWeight: "600",
                        textDecoration: "none",
                        marginBottom: "28px",
                        color: "#B3B3B3",
                        width: "200px",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      className="title"
                    >
                      {track.track.album.artists[0].name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
