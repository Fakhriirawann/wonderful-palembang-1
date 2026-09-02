import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import PalembangSilhouetteBackground from "./components/PalembangSilhouetteBackground";
import HomePage from "./Pages/HomePage";
import Attractions from "./Pages/Attractions";
import Culture from "./Pages/Culture";
import History from "./Pages/History";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Global Ambient Palembang Landscape Silhouette Backdrop */}
        <PalembangSilhouetteBackground variant="fixed" />

        <Router>
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/attractions" element={<Attractions />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/history" element={<History />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
