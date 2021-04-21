import {   
    ESTADO_MODAL,
    REALIZAR_PETICION
} from '../../types'

export default (state, action) => {
    switch(action.type){   
        case ESTADO_MODAL:
            return {
                ...state,
                estado: action.payload
            }
        case REALIZAR_PETICION:
            return {
                ...state,
                estado: false,
                peticion: action.payload
            }
        default:
            return state
    }
}