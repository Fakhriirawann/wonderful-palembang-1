import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Attractions from "./Pages/Attractions";


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}  />
          <Route path="/attractions" element={<Attractions/>}  />

          <Route path="/attractions" element={<Attractions/>}  />
          
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
