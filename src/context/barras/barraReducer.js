import {
    MOSTRAR_BARRA,
    OCULTAR_BARRA,
    CAMBIAR_MENU,
    SELECCIONAR_MODULO
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case MOSTRAR_BARRA:
            return {
                ...state,
                barra: true
            }
        case OCULTAR_BARRA:
            return {
                ...state,
                barra: false
            }
        case CAMBIAR_MENU:
            return {
                ...state,
                numeroMenu: action.payload
            }
        case SELECCIONAR_MODULO:
            localStorage.setItem('modulo', action.payload.nombre)
            localStorage.setItem('color', action.payload.color)
            return {
                ...state,
                modulo: action.payload.nombre,
                color: action.payload.color
            }
        default:
            return state
    }
}