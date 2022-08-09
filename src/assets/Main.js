import "./Main.css";
import { useEffect, useState } from "react";
import spotifyApiCall from "../api/spotifyApiCall";
import { Link } from "react-router-dom";

function Main() {
  const [tracks, setTracks] = useState({});
  const [totalResponse, setTotalResponse] = useState(null);

  useEffect(() => {
    spotifyApiCall("playlists/37i9dQZF1DX4sWSpwq3LiO").then((response) => {
      setTotalResponse(response);
      setTracks(response.tracks);
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
              <Link className="see-all" to={`/playlists/${totalResponse?.id}`}>
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
      </div>
    </div>
  );
}

export default Main;
