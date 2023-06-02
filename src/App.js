import "./App.css";
import Header from "./component/header/Header";
import NavBar from "./component/navBar/NavBar";
import Profile from "./component/profile/Profile";
import Contact from "./component/contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
