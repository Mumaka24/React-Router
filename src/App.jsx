import {React, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import Settings from "./components/Settings";
import Nav from "./components/Nav";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

  const [logo , setLogo] = useState({
    profile: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
    about: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Minimalist_info_Icon.png/768px-Minimalist_info_Icon.png",
    contact: "https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-circle-phone-call-icon-in-black-color-png-image_6596895.png",
    settings: "https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png"
  })

      return (
<ErrorBoundary>
  <Router>
    <div>
    <Nav />{/*Navigation with Links*/}
      <Routes>
        <Route path="/profile" element={<Profile logo={logo.profile}/>} />
        <Route path="/about" element={<About logo={logo.about}/>} />
        <Route path="/contact" element={<Contact logo={logo.contact}/>} />
        <Route path="/settings" element={<Settings logo={logo.settings}/>} />
      </Routes>
    </div>
    </Router>
    </ErrorBoundary>
  );
}

export default App
