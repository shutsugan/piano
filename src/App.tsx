import React from "react";

import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Logo />
      <main className="app-content" />
      <Footer />
    </div>
  );
}

export default App;
