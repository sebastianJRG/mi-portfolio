// CORREOS   : ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
// TELEFONOS : ^\+?[0-9]{1,3}?[- .]?\(?[0-9]{3}\)?[- .]?[0-9]{3}[- .]?[0-9]{4}$

const regexCorreos  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexTelefono = /^\+?[0-9]{1,3}?[- .]?\(?[0-9]{3}\)?[- .]?[0-9]{3}[- .]?[0-9]{4}$/

/**
 * 
 * @param {string} texto 
 */
export const validator = (texto) => {
    return regexCorreos.test(texto) || regexTelefono.test(texto)
}