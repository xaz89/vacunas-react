import React from 'react';
import './Vacunas.css';
import Header from './Header/Header.js';
import Aside from './Aside/Aside.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

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
