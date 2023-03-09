import "./App.css";
import { Controller, WebcamSample } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container flex">
      <Router>
        <Routes>
          <Route path="/" element={<Controller />} />
          <Route path="/webcam" element={<WebcamSample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
