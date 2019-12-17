import React from 'react';
import anterior from '../assets/img/arrow-left.svg';
import siguiente from '../assets/img/arrow-right.svg';
import apetito from '../assets/img/apetito.svg';
import dolor from '../assets/img/dolor.svg';
import llanto from '../assets/img/llanto.svg';

import hepatitis from '../assets/img/enfermedades/img-hepatitis-2.svg'
import tuberculosis from '../assets/img/enfermedades/img-tuberculosis-1.svg'

const renderDosis = (dosis) => {
  const elems = [];
  for (let id = 0; id < dosis; id -= -1) {
    elems.push(<div key={id}><p>{id}</p><small>Dosis</small></div>);
  }
  return elems;
};
const renderJeringa = (num) => {
  const elems = [];
  for (let i = 0; i < num; i -= -1) {
    elems.push(<div key={i}><i className="demo-icon icon-jeringa"></i></div>)
  }
  return elems;
};

const eligeIcono = (id) => {
  switch(id) {
    case 1:
      return apetito;
    case 2:
      return dolor;
    case 3:
      return llanto;
  }
};

const eligeImagen = (enfermedad) => {
  switch(enfermedad) {
    case "BGC":
      return tuberculosis;
    case "Hepatitis B":
      return hepatitis;
  }
}

const renderSecundarios = (arregloSecundarios) => {
  const elems = arregloSecundarios.map((elem, i) =>
    (<div key={i}><div className="circle"><img src={eligeIcono(elem.icono)}/></div>{elem.nombre}</div>)
  );
  return elems;
}

const Main = (props) => {
  const seccion = props.state.seccion;
  const subseccion = props.state.subseccion;
  const vacunaActual = props.state.vacunas[seccion].submenus[subseccion];
  return (
    <main>
      <article className="datos">
        <section className="breadcrum">Inicio / {seccion}</section>
        <section className="nombre-vacuna active" style={{ background: vacunaActual.color }}>{subseccion}</section>
        <section className="enfermedades-previene">
          <div className="titulo"> Enfermedades que previene </div>
          <div className="texto">{vacunaActual.enfermedadesPreviene}</div>
        </section>
        <section className="dosis-aplicacion">
          <div className="dosis">
            <div>Dosis</div>
            {renderDosis(4)}
            <div><p>5</p><small>Refuerzo</small></div>
          </div>
          <div className="aplicacion">
            <div>Aplicacion</div>
            <div className="active" style={{ background: vacunaActual.color }}>
              <i className="demo-icon icon-jeringa"></i>
            </div>
            {renderJeringa(4)}
          </div>
        </section>
        <section className="reacciones-secundarias">
          <div className="titulo">
            REACCIONES SECUNDARIAS
        </div>
          <div className="texto">
            Cabe destacar que las reacciones secundarías casi nunca suceden, son como de .4 de 10% los que
            podrían pasar por este pedo.
        </div>
          <div className="reacciones">
            {renderSecundarios(vacunaActual.reaccionesSecundarias)}
          </div>
        </section>
      </article>
      <article className="info">
        <section className="control">
          <div><img src={anterior} alt=""/>Anterior</div>
          <div>1/3</div>
          <div><img src={siguiente} alt=""/>Siguiente</div>
        </section>
        <section className="descripcion">
          <p>{vacunaActual.descripcionVacuna}</p>
        </section>
        <section className="animacion">
          <img src={eligeImagen(subseccion)} />
        </section>
      </article>
    </main>
  )
};

export default Main;