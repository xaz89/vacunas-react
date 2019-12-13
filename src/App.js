import React from 'react';
import './assets/css/Vacunas.css';
import vacunas from './assets/js/vacunas';
import Header from './components/Header/Header.js';
import Aside from './components/Aside/Aside.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App(props) {
  

  return (
    <div className="vacunas">
      <Header />
      <Aside />
      <Main name={vacunas.text}/>
      <Footer />
    </div>
  );
}

export default App;
