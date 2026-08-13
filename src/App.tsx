import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import QuiSommesNous from "./pages/QuiSommesNous";
import NosActions from "./pages/NosActions";
import NotreImpact from "./pages/NotreImpact";
import NousSoutenir from "./pages/NousSoutenir";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-ink-800">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/nos-actions" element={<NosActions />} />
          <Route path="/notre-impact" element={<NotreImpact />} />
          <Route path="/nous-soutenir" element={<NousSoutenir />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
