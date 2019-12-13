import React from 'react';
import vacunas from '../../assets/js/vacunas';


function Aside() {
   
    const menuPrinc = {
        "icono": [
            <i className='demo-icon icon-calculadora'></i>,
            <i className='demo-icon icon-ninios'></i>,
            <i className='demo-icon icon-adolescentes'></i>,
            <i className='demo-icon icon-mujeres'></i>,
            <i className='demo-icon icon-hombres'></i>,
            <i className='demo-icon icon-viejitos'></i>,
        ],
        "seccion": [
            "Calculadora",
            "Niños",
            "Adolescentes",
            "Mujeres",
            "Hombres",
            "Adultos Mayores",
        ],
        "descripcion": [
            "",
            "0 a 9 años",
            "10 a 19 años",
            "20 a 59 años",
            "20 a 59 años",
            "de 60 años a más",
        ],

    };

    return (

        <aside>
            <nav>
                <ul>
                    <li>
                        <div><a href=""><i className='demo-icon icon-calculadora'></i>Calculadora</a></div>
                    </li>
                    {
                        vacunas.map((secc, i) => {
                            return (
                                <li>
                                    <div>
                                        <a ><i className={'demo-icon ' + secc.icono}></i><span>{secc.seccion}</span></a><small>{secc.edad}</small>
                                    </div>
                                    <ul className="d-block">
                                        {secc.submenus.map((sub, i) => {
                                            return (
                                                <li>
                                                    <div><a href="">{sub.nombreVacuna}</a></div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })
                    }
                    {/* <li><a href=""><i className={'demo-icon ' + vacunas[0].icono}></i><span>{vacunas[0].seccion}</span></a></li>
                <li><a href=""><i className={'demo-icon ' + vacunas[1].icono}></i><span>{vacunas[1].seccion}</span></a>
                    <small>{vacunas[1].edad}</small>
                    <ul>
                        <li>
                            <a href="">{vacunas[1].submenus.nombreVacuna}</a>
                        </li>
                        <li>
                            <a href="">BCG</a>
                            </li>
                        <li>
                            <a href="">BCG</a>
                        </li>
                    </ul>
                </li>
                <li>
                <a href="">{menuPrinc.icono[2]}<span>{menuPrinc.seccion[2]}</span></a>
                    <small>{menuPrinc.descripcion[2]}</small>
                </li>
                <li>
                <a href="">{menuPrinc.icono[3]}<span>{menuPrinc.seccion[3]}</span></a>
                    <small>{menuPrinc.descripcion[3]}</small>
                </li>
                <li>
                <a href="">{menuPrinc.icono[4]}<span>{menuPrinc.seccion[4]}</span></a>
                    <small>{menuPrinc.descripcion[4]}</small>
                </li>
                <li> 
                <a href="">{menuPrinc.icono[5]}<span>{menuPrinc.seccion[5]}</span></a>
                    <small>{menuPrinc.descripcion[5]}</small>
                </li>*/}
                </ul>
            </nav>
        </aside>




        /*  <aside>
             <nav>
                 <ul>
                 <nav>
               <ul>
                   <li><a href=""><i className="demo-icon icon-calculadora"></i><span>Calculadora</span></a></li>
                   <li>
                       <a href="#"><i className="demo-icon icon-ninios"></i><span>Niños</span></a>
                       <small>0 a 9 años de edad</small>
                       <ul>
                           <li>
                               <a href="">BCG</a>
                           </li>
                           <li>
                               <a href="">BCG</a>
                               </li>
                           <li>
                               <a href="">BCG</a>
                           </li>
                       </ul>
                   </li>
                   <li>
                       <a href="#"><i className="demo-icon icon-adolescentes"></i><span> Adolescentes</span></a>
                       <small>0 a 9 años de edad</small>
                   </li>
                   <li>
                       <a href="#"><i className="demo-icon icon-mujeres"></i><span> Mujeres</span></a>
                       <small>0 a 9 años de edad</small>
                   </li>
                   <li>
                       <a href="#"><i className="demo-icon icon-hombres"></i><span> Hombres</span></a>
                       <small>0 a 9 años de edad</small>
                   </li>
                   <li>
                       <a href="#"><i className="demo-icon icon-viejitos"></i><span> Adultos mayores</span></a>
                       <small>0 a 9 años de edad</small>
                   </li>
               </ul>
           </nav>
                 </ul>
             </nav>
         </aside>
         <aside> */
    );
}

export default Aside;