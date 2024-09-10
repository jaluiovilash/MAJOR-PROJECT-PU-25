import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DonorDashboard from "./pages/DonorDashboard";
import BloodInventoryPage from "./pages/BloodInventoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DonorDashboard />} />
        <Route path="/inventory" element={<BloodInventoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
