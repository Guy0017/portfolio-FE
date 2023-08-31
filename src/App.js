import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import NavBar from './component/navBar/NavBar';
import Profile from './component/profile/Profile';
import Contact from './component/contact/Contact';
import Projects from './component/projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
      </div>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
