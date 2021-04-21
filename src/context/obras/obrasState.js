import { useReducer } from 'react'
import obrasContext from './obrasContext'
import obrasReducer from './obrasReducer'

import api from '../../libs/api'

import {
    CARGAR_OBRAS,
    ERROR_CARGAR_OBRAS,
} from '../../types/index'


const ObrasState = props => {

    const initialState = {
        obras: [],
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(obrasReducer, initialState)

    // Serie de funciones
    const cargarObras = async () => {
        try {
            const obras = await api.cargarObras()
            console.log(obras);

            dispatch({
                type: CARGAR_OBRAS,
                payload: obras.data
            })

        } catch {
            const alerta = {
                msg: 'Hubo un error al cargar las obras',
                categoria: 'alerta alerta-error'
            }
            dispatch({
                type: ERROR_CARGAR_OBRAS,
                payload: alerta
            })
        }
    }
        
    return (
        <obrasContext.Provider
            value={{
                obras: state.obras,
                cargarObras    
            }}
        >
            { props.children }
        </obrasContext.Provider>
    )
}

export default ObrasState