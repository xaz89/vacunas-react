import React from 'react';
import './assets/css/Vacunas.css';
import Header from './components/Header.component';
import Aside from './components/Aside.component';
import Main from './components/Main.component';
import Footer from './components/Footer.component';

const App = (props) => (
  <div className="vacunas">
    <Header state={props.state} />
    <Aside vacunas={props.state.vacunas} dispatch={props.dispatch} />
    <Main state={props.state} />
    {/* <Footer /> */}
  </div>
);

export default App;
