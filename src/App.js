import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function App() {
  let dogs = ["duke", "perry", "tubby"];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dogs" element={<DogList />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        <Route path="/*" element={<Navigate to="/dogs" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
