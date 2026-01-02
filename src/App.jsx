import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./component/formpage";
import GpaCalculator from "./component/gpacalculator";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/gpa" element={<GpaCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
