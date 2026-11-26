import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search.jsx";
import Character from "./Character.jsx";

function App() {
  // Stored here so the search is remembered after clicking Back
  const [search, setSearch] = useState("");

  return (
    <>
      <h1>Disney Characters</h1>
      <Routes>
        <Route
          path="/"
          element={<Search search={search} setSearch={setSearch} />}
        />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </>
  );
}

export default App;
