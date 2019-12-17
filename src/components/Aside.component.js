import React from 'react';
import vacunas from '../assets/js/vacunas';

import { cambiaSeccion, cambiaSubSeccion } from '../actions/aside'

const Aside = (props) => (
  <aside>
    <nav>
      <ul>
        <li>
          <div><a href="#"><i className='demo-icon icon-calculadora'></i><p className="d-block">Calculadora</p></a></div>
        </li>
        {Object.keys(vacunas).map((secc, seckey) => (
          <li key={seckey}>
            <div onClick={() => props.dispatch(cambiaSeccion(secc))}>
              <a><i className={`demo-icon ${vacunas[secc].icono}`}></i><span>{secc}</span></a><small>{vacunas[secc].edad}</small>
            </div>
            <ul className="d-block">
              {Object.keys(vacunas[secc].submenus).map((sub, subkey) => (
                <li key={subkey} onClick={() => props.dispatch(cambiaSubSeccion(secc, sub))}>
                  <div><a href="#">{sub}</a></div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

export default Aside;