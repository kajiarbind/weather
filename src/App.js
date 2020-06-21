import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/weatherCard/Component";
import WeatherEngine from "./components/weatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Sydney" />
      <WeatherEngine location="Seattle" />
    </div>
  );
}

export default App;
