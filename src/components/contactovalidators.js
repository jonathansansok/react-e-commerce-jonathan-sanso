// se usa para verificar que la persona tenga entre 18 y 100 años en contacto.jsx
const edadValidator = (value) => {
    return value >= 18 && value <= 100;
}
export { edadValidator }