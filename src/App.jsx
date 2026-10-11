import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Technologies from "./pages/Technologies.jsx";
import Process from "./pages/Process.jsx";
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import CareerDetail from "./pages/CareerDetail.jsx";
import Apply from "./pages/Apply.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/apply" element={<Apply />} />
          <Route path="/careers/:roleId" element={<CareerDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* Anciennes URLs françaises → nouvelles routes */}
          <Route path="/processus" element={<Navigate to="/process" replace />} />
          <Route path="/a-propos" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;