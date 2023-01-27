import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Affiches from './components/Affiches';
import MentionsLegales from './components/MentionsLegales';

function App() {
  return (
    <div className="bg-slate-50">
      <NavBar />
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/films" element={<Home />} />
        <Route path= "/films/:title" element={<Home />} />
        <Route path= "/affiches" element={<Affiches />} />
        <Route path= "/contact" element={<Contact />} />
        <Route path= "/mentionslegales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </div>
  )
}

  

export default App;
