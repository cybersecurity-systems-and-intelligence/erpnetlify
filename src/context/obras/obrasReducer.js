import {
    CARGAR_OBRAS,
    ERROR_CARGAR_OBRAS
} from '../../types'

export default (state, action) => {
    switch(action.type){     
        case CARGAR_OBRAS:
            return {
                ...state,
                obras: action.payload,
                mensaje: null
            }
        case ERROR_CARGAR_OBRAS:
            return {
                ...state,
                obras: [],
                mensaje: action.payload               
            }
        default:
            return state
    }
}