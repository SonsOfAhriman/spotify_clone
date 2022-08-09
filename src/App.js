import { Routes, Route } from "react-router-dom";
import Main from "./assets/Main";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/playlists/:id" element={<Main />} />
    </Routes>
  );
}

export default App;
