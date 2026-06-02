import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import BottomMenu from './components/BottomMenu';
import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';

import SoccerScanTrainerPrivacy from './pages/SoccerScanTrainerPrivacy';
import SoccerScanTrainerSupport from './pages/SoccerScanTrainerSupport';
import FiveTenAmPage from './pages/FiveTenAmPage';
import SoccerScanTrainerPage from './pages/SoccerScanTrainerPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <TopMenu />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:slug" element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/510am" element={<FiveTenAmPage />} />
          <Route path="/soccer-scan-trainer/privacy" element={<SoccerScanTrainerPrivacy />} />
          <Route path="/soccer-scan-trainer/support" element={<SoccerScanTrainerSupport />} />
          <Route path="/soccer-scan-trainer" element={<SoccerScanTrainerPage />} />
        </Routes>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;