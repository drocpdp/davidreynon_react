import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import BottomMenu from './components/BottomMenu';
import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <div className="app-container">
        <TopMenu />
        <Routes>
          {/* Default landing route */}
          <Route path="/" element={<LandingPage />} />

          {/* Dynamic slug-based route */}
          <Route path="/:slug" element={<LandingPage />} />

          {/* Legacy project-specific routes (optional) */}
          <Route path="/olympic" element={<LandingPage initialProjectId={2} />} />
          <Route path="/popup" element={<LandingPage initialProjectId={3} />} />

          {/* 404 fallback */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;
