import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    SELECCIONAR_MODULO
} from '../../types'

export default (state, action) => {

    switch (action.type){        
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('accessToken', JSON.stringify(action.payload.accessToken))
            localStorage.setItem('refreshToken', JSON.stringify(action.payload.refreshToken))
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false,
            }

        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload,
                cargando: false,
                modulo: null
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false,
            }        
        default:
            return state
    }
}