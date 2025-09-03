import React from "react";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <h1>Movie Review App</h1>
        <p>This is the main content area for our movie review application.</p>
      </main>
    </div>
  );
}

export default App;
