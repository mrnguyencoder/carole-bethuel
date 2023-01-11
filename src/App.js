import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './componants/NavBar';
import Home from './componants/Home';
import Contact from './componants/Contact';
import Footer from './componants/Footer';
import Affiches from './componants/Affiches';
import MentionsLegales from './componants/MentionsLegales';
import Films from './componants/Films';

function App() {
  return (
    <div className="bg-slate-50">
      <NavBar />
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/films" element={<Films />} />
        <Route path= "/affiches" element={<Affiches />} />
        <Route path= "/contact" element={<Contact />} />
        <Route path= "/mentionslegales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
