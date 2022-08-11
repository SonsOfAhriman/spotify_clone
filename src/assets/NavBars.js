import "./NavBars.css";
import App from "../App";

export default function NavBars() {
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
              justifyContent: "space-between",
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
              width: "200px",
            }}
          >
            <button className="sign-up">Sign up</button>
            <button className="log-in">Log in</button>
          </div>
        </div>
      </nav>
      <nav id="root-nav" className="nav-bar">
        <div></div>
      </nav>
      <div className="main-view">
        <App />
      </div>
    </div>
  );
}
