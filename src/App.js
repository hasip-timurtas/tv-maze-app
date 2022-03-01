import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './componenets/header'
import Home from './pages/home';
import Show from './pages/show';
import './App.scss';

function App() {
  return (
    <main className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="show" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </main >
  );
}

export default App;