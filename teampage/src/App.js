import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // ✅ Navigate 추가

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  return (
    <Router>
      <Header setRefreshTrigger={setRefreshTrigger} />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About refreshTrigger={refreshTrigger} />} />
      </Routes>
    </Router>
  );
}

export default App;
