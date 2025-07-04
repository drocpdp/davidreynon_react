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
          <Route path="/" element={<LandingPage />} />
          <Route path="/:slug" element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;