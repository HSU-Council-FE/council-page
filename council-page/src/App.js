import logo from './logo.svg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} 
from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    </>
      
    
  );
}

export default App;
