import "./ShowAll.css";
import { useEffect, useState } from "react";
import spotifyApiCall from "../api/spotifyApiCall";
import { useLocation } from "react-router-dom";

function ShowAll() {
  const [tracks, setTracks] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location) {
      spotifyApiCall(location.pathname).then((response) => {
        setTracks(response.tracks);
      });
    }
  }, [location]);

  return (
    <div className="App">
      <div className="main-grid">
        <div className="main-component">
          <div style={{ display: "flex" }}>
            <div style={{ marginBottom: "10px" }} className="group-header">
              {location ? (
                <a href={() => false}>{location.state.header}</a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="grid-container-show">
            {tracks?.items?.map((track, index) => (
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
                        width: "140px",
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
                        width: "140px",
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

export default ShowAll;
