import { Routes, Route } from "react-router-dom";
import Main from "./assets/Main";
import ShowAll from "./assets/ShowAll";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/playlists/:id" element={<ShowAll />} />
    </Routes>
  );
}

export default App;
