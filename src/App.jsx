import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import MemoriesPage from './pages/MemoriesPage';
import WishPage from './pages/WishPage';
import SurprisePage from './pages/SurprisePage';
import FinalPage from './pages/FinalPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="/wish" element={<WishPage />} />
        <Route path="/surprise" element={<SurprisePage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
