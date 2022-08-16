import "./NavBars.css";
import App from "../App";
import spotify from "../spotify_white.svg";

import { useState } from "react";


export default function NavBars() {

  const [home] = useState(true);

  return (
    <div className="top-container">
      <nav id="nav-bar" className="top-bar">
        <div className="first-nav">
          <div
            style={{
              padding: "16px",
              width: "80px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <button className="circle-button" href={() => false}>
              <i class="fa-solid fa-angle-left fa-xl"></i>
            </button>
            <button className="circle-button" href={() => false}>
              <i class="fa-solid fa-angle-right fa-xl"></i>
            </button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "200px"
            }}
          >
            <button className="sign-up">Sign up</button>
            <button className="log-in">Log in</button>
          </div>
        </div>
      </nav>
      <nav id="root-nav" className="nav-bar">
        <div className="left-nav-first">
          <div className="left-nav-banner">
            <img style={{ width: "48px" }} src={spotify} alt="spotify" />
            <h2 style={{ color: "white" }}>Spotify</h2>
          </div>
          <ul style={{ padding: "0", margin: "0" }}>
            <li className="left-list">
              <a href="/" className={ home ? "left-list-item home" : "left-list-item"}>
                <i
                  style={{
                    verticalAlign: "middle",
                    alignItems: "center",
                    lineHeight: "inherit"
                  }}
                  class="fa-solid fa-house fa-lg"
                ></i>
                <span style={{}}>Home</span>
              </a>
            </li>
            <li className="left-list">
              <a href="/" className="left-list-item">
                <i
                  style={{
                    verticalAlign: "middle",
                    alignItems: "center",
                    lineHeight: "inherit"
                  }}
                  class="fa-solid fa-magnifying-glass fa-lg"
                ></i>
                <span style={{}}>Search</span>
              </a>
            </li>
            <li className="left-list">
              <a href="/" className="left-list-item">
                <i
                  style={{
                    verticalAlign: "middle",
                    alignItems: "center",
                    lineHeight: "inherit"
                  }}
                  class="fa-solid fa-book fa-lg"
                ></i>
                <span style={{}}>Your Library</span>
              </a>
            </li>
          </ul>
          <ul style={{ padding: "0" }}>
          <li className="left-list">
            <a href="/" className="left-list-item">
              <i
                style={{
                  verticalAlign: "middle",
                  alignItems: "center",
                  lineHeight: "inherit"
                }}
                class="fa-solid fa-square-plus fa-lg"
              ></i>
              <span style={{}}>Create Playlist</span>
            </a>
          </li>
          <li className="left-list">
            <a href="/" className="left-list-item">
              <i
                style={{
                  verticalAlign: "middle",
                  alignItems: "center",
                  lineHeight: "inherit"
                }}
                class="fa-solid fa-heart fa-lg"
              ></i>
              <span style={{}}>Liked Songs</span>
            </a>
          </li>
          </ul>
        </div>
      </nav>
      <div className="main-view">
        <App />
      </div>
    </div>
  );
}
