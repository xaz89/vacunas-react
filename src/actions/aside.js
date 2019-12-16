export const cambiaSeccion = (seccion) => ({
  type: 'CAMBIA_SECCION',
  seccion
});
export const cambiaSubSeccion = (seccion, subseccion) => ({
  type: 'CAMBIA_SUBSECCION',
  seccion,
  subseccion
});