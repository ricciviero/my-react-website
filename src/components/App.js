import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// importazione componenti
import Home from './Home.js';
import PrivacyPolicy from './PrivacyPolicy.js';

// Analytics
import { Analytics } from "@vercel/analytics/react"

// importazione costanti e variabili


// componente app
const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>

      <Analytics />

    </>
  );
}

export default App;