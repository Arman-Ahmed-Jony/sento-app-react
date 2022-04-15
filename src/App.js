import "./App.css";
import React from "react";
import ContentIndex from "./modules/content";
import Website from "./modules/website";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Website />} />
      <Route
        path="/cms"
        element={
          <div className="m-4">
            <h1 className="text-3xl text-center font-bold">
              Sinto Shinu Content Manager
            </h1>
            <ContentIndex />
          </div>
        }
      />
      } />
    </Routes>
  );
}

export default App;
