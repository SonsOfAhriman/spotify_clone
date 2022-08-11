import { Routes, Route } from "react-router-dom";
import Main from "./assets/Main";
import ShowAll from "./assets/ShowAll";
import ShowOne from "./assets/ShowOne";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/playlists/:id" element={<ShowAll />} />
        <Route path="/album/:id" element={<ShowOne />} />
      </Routes>
    </>
  );
}

export default App;
