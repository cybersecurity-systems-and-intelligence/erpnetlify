import {
    SELECCIONAR_OBRA,
    DATOS_PERSONALES,
    DATOS_FISCALES,
    DATOS_BANCARIOS,
    SUBMIT_CLIENTE,
    ERROR_REGISTRO_CLIENTE
} from '../../../types'

export default (state, action) => {
    switch(action.type){     
        case SELECCIONAR_OBRA:
            return {
                ...state,
                obraSeleccionada: action.payload
            }
        case DATOS_PERSONALES:
            return {
                ...state,
                datosPersonales: {
                    ...state.datosPersonales,
                    [action.payload.name]: action.payload.value
                }
            }
        case DATOS_FISCALES:
            return {
                ...state,
                datosFiscales: {
                    ...state.datosFiscales,
                    [action.payload.name]: action.payload.value
                }
            }
        case DATOS_BANCARIOS:
            return {
                ...state,
                datosBancarios: {
                    ...state.datosBancarios,
                    [action.payload.name]: action.payload.value
                }
            }
        case SUBMIT_CLIENTE:
            return {
                ...state,
                datosPersonales: {
                    nombre: '',
                    correo: '',
                    telefonoFijo: '',
                    telefonoMovil: ''
                },
                datosFiscales: {
                    nombreEmpresa: '',
                    rfc: '',
                    direccionFiscal: '',
                    direccionOficina: '',
                    calleReferencia1: '',
                    calleReferencia2: '',
                    cp: '',
                    colonia: '',
                    ciudad: '',
                    estado: ''
                },
                datosBancarios: {
                    numeroClave: '',
                    cuenta: '',
                    razonSocial: ''
                }
            }
        case ERROR_REGISTRO_CLIENTE:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state
    }
}