import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "@/pages/login";
import { ThemeToggle } from "@/components/atoms";

function App() {
  return (
    <BrowserRouter>
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
