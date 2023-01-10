import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
      <Route path= "/" element={<Home />} />
        <Route path= "/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
