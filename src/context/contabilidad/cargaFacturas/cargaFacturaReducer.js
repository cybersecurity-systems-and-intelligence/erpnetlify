import {
    CONSULTAR_INFORMACION,
    CONSULTAR_ERROR
} from '../../../types'

export default (state, action) => {
    switch(action.type){
        case CONSULTAR_INFORMACION:
            return {
                ...state,
                informacion: {
                    receptor: action.payload.receptor.nombre,
                    rfc: action.payload.receptor.rfc,
                    fecha: action.payload.fecha,
                    total: action.payload.total,
                    subtotal: action.payload.subtotal,
                    moneda: action.payload.moneda,
                    conceptos: action.payload.conceptos
                },
                mensaje: null
            }
        case CONSULTAR_ERROR:
            return {
                informacion: {
                    receptor: '',
                    rfc: '',
                    fecha: '',
                    total: '',
                    subtotal: '',
                    moneda: '',
                    conceptos: []
                },
                mensaje: action.payload
            }
        default:
            return state
    }
}