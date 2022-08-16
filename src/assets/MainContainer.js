import "./Main.css";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";


export default function MainContainer(props) {
  const size = (useMediaQuery({ query: "(min-width: 1400px)" }) ? 6 : 4);

  const mainValue = useMemo(() => 
  
  
    props.tracks?.items?.slice(0, size).map((track, index) => (
      <Link
        to={`/album/${track.track.album.id}`}
        state={{ track: track.track }}
      >
        <div key={index} className="grid-item">
          <div className="card">
            <div className="poster">
              <img
                src={track?.track?.album?.images[0].url}
                alt={props.mainHeader}
              />
            </div>
            <div className="card-info">
              <a
                href={() => false}
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  width: "140px",
                  color: "#FEFEFE",
                  display: "block",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
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
                  whiteSpace: "nowrap"
                }}
                className="title"
              >
                {track.track.album.artists[0].name}
              </a>
            </div>
          </div>
        </div>
      </Link>
    ))
  
  , [size, props]);


  return (
    <div className="main-component">
      <div style={{ display: "flex" }}>
        <div className="group-header">
          <a href={() => false}>{props.mainHeader}</a>
          <p>{props.secondHeader}</p>
        </div>
        {props.totalResponse ? (
          <Link
            className="see-all"
            to={`/playlists/${props.totalResponse?.id}`}
            state={{ header: props.mainHeader }}
          >
            SEE ALL
          </Link>
        ) : (
          <a href={() => false} className="see-all">
            SEE ALL
          </a>
        )}
      </div>
      <div className="grid-container">{mainValue}</div>
    </div>
  );
}
