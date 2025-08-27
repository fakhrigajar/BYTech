import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.jpeg";
import './css/Header.css';

export default function Header() {
 const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
 });

 useEffect(() => {
  if (darkMode) {
   document.body.setAttribute("data-bs-theme", "dark");
   localStorage.setItem("theme", "dark");
  } else {
   document.body.setAttribute("data-bs-theme", "light");
   localStorage.setItem("theme", "light");
  }
 }, [darkMode]);

 return (
  <header>
   <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-nav"}`}>
    <div className="container">
     <img src={Logo} className="logo-img navbar-brand" alt="Logo" />
     <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
     >
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
       <li className="nav-item"><a className="nav-link fw-bold" href="#">Ana Səhifə</a></li>
       <li className="nav-item"><a className="nav-link fw-bold" href="#services">Xidmətlər</a></li>
       <li className="nav-item"><a className="nav-link fw-bold" href="#">Haqqımızda</a></li>
       <li className="nav-item"><a className="nav-link fw-bold" href="#">Vakansiya</a></li>
       <li className="nav-item"><a className="nav-link fw-bold" href="#">Əlaqə</a></li>
      </ul>
      <div className="d-flex align-items-center gap-3">
       <select className="form-select py-1">
        <option>AZ</option>
        <option>EN</option>
       </select>
       <div className="form-check form-switch">
        <input
         className="form-check-input"
         type="checkbox"
         id="darkModeSwitch"
         onChange={() => setDarkMode(!darkMode)}
         checked={darkMode}
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">
         {darkMode ? 'Light' : 'Dark'}
        </label>
       </div>
      </div>
     </div>
    </div>
   </nav>
  </header>
 );
}