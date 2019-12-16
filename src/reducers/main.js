import vacunas from '../assets/js/vacunas'

const initialState = {
  seccion: "",
  subseccion: "",
  vacunas: { ...vacunas }
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}