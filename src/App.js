import React from 'react';
import './assets/css/Vacunas.css';
import Header from './components/Header/Header.js';
import Aside from './components/Aside/Aside.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="vacunas">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
