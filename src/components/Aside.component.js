import React from 'react';
import vacunas from '../assets/js/vacunas';

const Aside = () => (
  <aside>
    <nav>
      <ul>
        <li>
          <div><a href=""><i className='demo-icon icon-calculadora'></i>Calculadora</a></div>
        </li>
        {Object.keys(vacunas).map((secc) => (
          <li>
            <div>
              <a ><i className={`demo-icon ${vacunas[secc].icono}`}></i><span>{secc}</span></a><small>{vacunas[secc].edad}</small>
            </div>
            <ul className="d-block">
              {Object.keys(vacunas[secc].submenus).map((sub) => (
                <li>
                  <div><a href="">{sub}</a></div>
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