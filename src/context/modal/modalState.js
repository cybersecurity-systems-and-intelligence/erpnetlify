import { useReducer } from 'react'
import modalContext from './modalContext'
import modalReducer from './modalReducer'

import api from '../../libs/api'

import {
    ESTADO_MODAL,
    REALIZAR_PETICION
} from '../../types/index'


const ModalState = props => {

    const initialState = {
        estado: false,
        peticion: null
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(modalReducer, initialState)

    // Serie de funciones
    const estadoModal = (band) => {
        dispatch({
            type: ESTADO_MODAL,
            payload: band
        })
    }

    const realizarPeticion = (band) => {
        dispatch({
            type: REALIZAR_PETICION,
            payload: Math.random()
        })
    }

    return (
        <modalContext.Provider
            value={{
                estado: state.estado,
                peticion: state.peticion,
                estadoModal,
                realizarPeticion
            }}
        >
            { props.children }
        </modalContext.Provider>
    )
}

export default  ModalState