import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PalindromeChecker from './comps/PalindromeChecker'
import SortVisualizer from './comps/SortVisualizer';
import Home from './Home';
import StackApp from './comps/StackApp';

function App() {
  

  return (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="sortingtask" element={<SortVisualizer/>} />
            <Route path="palindrome" element={<PalindromeChecker />} />
            <Route path="stackapp" element={<StackApp />} />

        </Routes>
      </BrowserRouter>
  );
};

export default App;