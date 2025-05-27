import "./App.css"
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Attractions from "./Pages/Attractions";
import Culture from "./Pages/Culture";
import History from "./Pages/History";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}  />
          <Route path="/attractions" element={<Attractions/>}  />
          <Route path="/culture" element={<Culture/>}  />
          <Route path="/history" element={<History/>}  />
          <Route path="/contact" element={<ContactPage/>}  />
          <Route path="*" element={<NotFoundPage/>}  />
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
