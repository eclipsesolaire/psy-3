import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Services from './pages/Services';
import APropos from './pages/APropos';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


