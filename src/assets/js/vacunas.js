

let vacunas =  [
    {
        id: 0,
        seccion: "Calculadora",
        icono: "icon-calculadora",
    },
    {
        id: 1,
        seccion: "Niños",
        icono: "icon-ninios",
        edad: "0 a 9 años",
        submenus: [
            {
                nombreVacuna: "BGC",
                enfermedadesPreviene: "Tuberculosis, tuberculosis",
                descripcionVacuna: "La tuberculosis es una enfermedad infecciosa producida por una bacteria (el bacilo Mycobacterium tuberculosis), que ataca inicialmente sobre todo a los pulmones, aunque puede extenderse a otras muchas partes del cuerpo. Es causa de importante mortalidad, principalmente en los países pobres, pero está extendida por todo el mundo. Se contagia, sobre todo, por el contacto con enfermos que diseminan el microbio (enfermos bacilíferos) a través de la tos. Las personas que han tenido contacto con esta bacteria o que están afectadas por la enfermedad muestran un resultado positivo en la prueba cutánea de la tuberculina, también llamada PPD o Mantoux.",
                reaccionesSecundarias: "Dolor, enrojecimiento o inflamación donde se administró la inyección.",
                dosis: [
                    {
                        primera:[
                            {   
                                active: true,
                                edad: 0,
                            },
                        ],
                        segunda:[
                            {   
                                active: false,
                                edad: "",
                            },
                        ],
                        tercera:[
                            {   
                                active: false,
                                edad: "",
                            },
                        ],
                        cuarta:[
                            {   
                                active: false,
                                edad: "",
                            },
                        ],
                        refuerzo:[
                            {   
                                active: false,
                                edad: "",
                            },
                        ],
                    },
                ],
                
            },
            
        ]
    },
   
    
]

export default vacunas;