import { useReducer } from 'react'
import barraContext from './barraContext'
import barraReducer from './barraReducer'

import {
    MOSTRAR_BARRA,
    OCULTAR_BARRA,
    CAMBIAR_MENU,
    SELECCIONAR_MODULO
} from '../../types/index'


const BarraState = props => {

    const initialState = {
        barra: false,
        numeroMenu: 0,
        modulo: localStorage.getItem('modulo'),
        color: localStorage.getItem('color')
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(barraReducer, initialState)

    // Serie de funciones

    // Mostrar barra
    const mostrarBarra = () => {
        dispatch({
            type: MOSTRAR_BARRA
        })
    }

    // Ocultar barra
    const ocultarBarra = () => {
        dispatch({
            type: OCULTAR_BARRA
        })
    }

    const cambiarMenu = (num) => {
        dispatch({
            type: CAMBIAR_MENU,
            payload: num
        })
    }

    // guardar nombre del modulo seleccionado
    const seleccionarModulo = (modulo, color) => {
        const moduloObject = {
            nombre: modulo,
            color: color
        }
        dispatch({
            type: SELECCIONAR_MODULO,
            payload: moduloObject
        })
    }
        
    return (
        <barraContext.Provider
            value={{
                barra: state.barra,
                otra: state.otra,
                numeroMenu: state.numeroMenu,
                modulo: state.modulo,
                color: state.color,
                mostrarBarra,
                ocultarBarra,
                cambiarMenu,
                seleccionarModulo
            }}
        >
            { props.children }
        </barraContext.Provider>
    )
}

export default BarraState