import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './componants/NavBar';
import Home from './componants/Home';
import Contact from './componants/Contact';
import Footer from './componants/Footer';
import Affiches from './componants/Affiches';
import MentionsLegales from './componants/MentionsLegales';
import Films from './componants/FilmDetails';
import NotFound from './componants/NotFound';
import PhotoGallery from './componants/PhotoGallery';
import ViewPhotos from './componants/ViewPhotos';

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
        <Route path= "*" element={<NotFound />} />

        
      <Router>
      <Route path="/" exact component={PhotoGallery} />
      <Route path="/photos/:id" component={ViewPhotos} />
      </Router>



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
