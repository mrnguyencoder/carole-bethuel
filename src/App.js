import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './componants/NavBar';
import Home from './componants/Home';
import Contact from './componants/Contact';
import Footer from './componants/Footer';
import Affiches from './componants/Affiches';

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/affiches" element={<Affiches />} />
        <Route path= "/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
