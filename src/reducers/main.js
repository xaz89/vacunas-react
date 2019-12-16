import vacunas from '../assets/js/vacunas'

const initialState = {
  seccion: "",
  subseccion: "",
  vacunas: { ...vacunas }
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CAMBIA_SECCION':
      return {
        ...state,
        seccion: action.seccion
      };
    case 'CAMBIA_SUBSECCION':
      return {
        ...state,
        seccion: action.seccion,
        subseccion: action.subseccion
      }
    default:
      if (!state.seccion) {
        state.seccion = Object.keys(state.vacunas)[0]
        state.subseccion = Object.keys(state.vacunas[state.seccion].submenus)[0]
      } else if (!state.subseccion) {
        state.subseccion = Object.keys(state.vacunas[state.seccion].submenus)[0]
      }
      return state;
  }
}