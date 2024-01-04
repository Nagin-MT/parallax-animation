import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Animation from "./pages/animation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Animation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
