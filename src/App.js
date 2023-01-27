import {Routes, Route}  from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Langing';
import NavbarCustom from './components/Navbar';
import Projects from './pages/Projects';
import Profile from './profile';

function App() {
  return (
    <div className='body'>
      <NavbarCustom/>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
