import "./ShowOne.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ShowOne() {
  const location = useLocation();
  console.log(location);

  const [track, setTrack] = useState(null);

  useEffect(() => {
    setTrack(location.state.track);
  }, [location]);

  return (
    <div className="AppShow">
      <div style={{ color: "white" }} className="main-item">
        <div className="flex-row">
          {track && console.log(track)}
          {track && (
            <>
              <img
                id="main-image"
                src={track?.album?.images[0].url}
                alt="show-one"
              ></img>
              <div className="main-content">
                <h2>{track?.album?.album_type.toUpperCase()}</h2>
                <h1
                  style={{
                    width: "940px",
                    display: "block",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {track?.name.toUpperCase()}
                </h1>
                <div className="internal-info">
                  {track.artists.map((artist) => (
                    <div className="artist-info">
                      <a href={() => false}>{artist.name}</a>
                      <i
                        style={{
                          margin: "0 4px",
                          fontSize: "0.2rem",
                        }}
                        class="fa-solid fa-circle fa-2xs"
                      ></i>
                    </div>
                  ))}
                  <div>
                    <a href={() => false}>
                      {new Date(track.album.release_date)
                        .getFullYear()
                        .toString()}
                    </a>
                    <i
                      style={{
                        margin: "0 4px",
                        fontSize: "0.2rem",
                      }}
                      class="fa-solid fa-circle fa-2xs"
                    ></i>
                    <a href={() => false}>
                      {track.album.total_tracks === 1
                        ? "1 song, "
                        : track.album.total_tracks + " songs, "}
                      <span style={{ color: "#D3D3D3" }}>
                        {new Date(track.duration_ms).getMinutes() +
                          " min " +
                          new Date(track.duration_ms).getSeconds() +
                          " sec"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
