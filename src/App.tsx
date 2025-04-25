
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BirthdayInvitation from "@/pages/BirthdayInvitation";
import NotFound from "@/pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayInvitation />} />
        <Route path="/invite" element={<BirthdayInvitation />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
