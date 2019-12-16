const vacunas = {
  "Niños": {
    id: 1,
    icono: "icon-ninios",
    edad: "0 a 9 años",
    submenus: {
      "BGC": {
        enfermedadesPreviene: "Tuberculosis",
        color: '#0D47A1',
        descripcionVacuna: "Esta vacuna protege contra las formas graves de tuberculosis en los niños pequeños: la tuberculosis meníngea o cerebral, y la tuberculosis miliar o pulmonar diseminada, principalmente.",
        reaccionesSecundarias: [
          { nombre: 'Perdida de apetito', icono: 1 },
          { nombre: 'Dolor', icono: 2 },
          { nombre: 'Llanto', icono: 3 }
        ],
        dosis: {
          primera: { active: true, edad: 0 },
          segunda: { active: false, edad: "" },
          tercera: { active: false, edad: "" },
          cuarta: { active: false, edad: "" },
          refuerzo: { active: false, edad: "" }
        }
      },
      "Hepatitis B": {
        enfermedadesPreviene: "Hepatitis B",
        color: '#FB731D',
        descripcionVacuna: "Previene la infección por el virus de la hepatitis B, enfermedad que se transmite cuando los líquidos corporales de una persona infectada con hepatitis B se introducen en el cuerpo de otra no infectada.",
        reaccionesSecundarias: [
          { nombre: 'Perdida de apetito', icono: 1 }
        ],
        dosis: {
          primera: { active: true, edad: 0 },
          segunda: { active: false, edad: "" },
          tercera: { active: false, edad: "" },
          cuarta: { active: false, edad: "" },
          refuerzo: { active: false, edad: "" }
        }
      }
    }
  },
  "Adolescentes": {
    id: 2,
    icono: "icon-adolescentes",
    edad: "10 a 19 años",
    submenus: {
      "BGC": {
        enfermedadesPreviene: "Tuberculosis",
        color: '#0D47A1',
        descripcionVacuna: "Esta vacuna protege contra las formas graves de tuberculosis en los niños pequeños: la tuberculosis meníngea o cerebral, y la tuberculosis miliar o pulmonar diseminada, principalmente.",
        reaccionesSecundarias: [
          { nombre: 'Perdida de apetito', icono: 1 },
          { nombre: 'Dolor', icono: 2 },
          { nombre: 'Llanto', icono: 3 }
        ],
        dosis: {
          primera: { active: true, edad: 0 },
          segunda: { active: false, edad: "" },
          tercera: { active: false, edad: "" },
          cuarta: { active: false, edad: "" },
          refuerzo: { active: false, edad: "" }
        }
      },
    }
  },
  "Mujeres": {
    id: 3,
    icono: "icon-mujeres",
    edad: "20 a 59 años",
    submenus: {
      "BGC": {
        enfermedadesPreviene: "Tuberculosis",
        color: '#0D47A1',
        descripcionVacuna: "Esta vacuna protege contra las formas graves de tuberculosis en los niños pequeños: la tuberculosis meníngea o cerebral, y la tuberculosis miliar o pulmonar diseminada, principalmente.",
        reaccionesSecundarias: [
          { nombre: 'Perdida de apetito', icono: 1 },
          { nombre: 'Dolor', icono: 2 },
          { nombre: 'Llanto', icono: 3 }
        ],
        dosis: {
          primera: { active: true, edad: 0 },
          segunda: { active: false, edad: "" },
          tercera: { active: false, edad: "" },
          cuarta: { active: false, edad: "" },
          refuerzo: { active: false, edad: "" }
        }
      },
    }
  },
  "Hombres": {
    id: 4,
    icono: "icon-hombres",
    edad: "20 a 59 años",
    submenus: {
      "BGC": {
        enfermedadesPreviene: "Tuberculosis",
        color: '#0D47A1',
        descripcionVacuna: "Esta vacuna protege contra las formas graves de tuberculosis en los niños pequeños: la tuberculosis meníngea o cerebral, y la tuberculosis miliar o pulmonar diseminada, principalmente.",
        reaccionesSecundarias: [
          { nombre: 'Perdida de apetito', icono: 1 },
          { nombre: 'Dolor', icono: 2 },
          { nombre: 'Llanto', icono: 3 }
        ],
        dosis: {
          primera: { active: true, edad: 0 },
          segunda: { active: false, edad: "" },
          tercera: { active: false, edad: "" },
          cuarta: { active: false, edad: "" },
          refuerzo: { active: false, edad: "" }
        }
      },
    }
  },
  "Adultos Mayores": {
    id: 5,
    icono: "icon-viejitos",
    edad: "de 60 años a más",
    submenus: {
      "BGC": {
        enfermedadesPreviene: "Tuberculosis",
        color: '#0D47A1',
        descripcionVacuna: "Esta vacuna protege contra las formas graves de tuberculosis en los niños pequeños: la tuberculosis meníngea o cerebral, y la tuberculosis miliar o pulmonar diseminada, principalmente.",
        reaccionesSecundarias: [
          { nombre: 'Perdida de apetito', icono: 1 },
          { nombre: 'Dolor', icono: 2 },
          { nombre: 'Llanto', icono: 3 }
        ],
        dosis: {
          primera: { active: true, edad: 0 },
          segunda: { active: false, edad: "" },
          tercera: { active: false, edad: "" },
          cuarta: { active: false, edad: "" },
          refuerzo: { active: false, edad: "" }
        }
      },
    }
  }
}

export default vacunas; 