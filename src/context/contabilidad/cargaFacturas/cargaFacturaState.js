import { useReducer } from 'react'
import cargaFacturaContext from './cargaFacturaContext'
import cargaFacturaReducer from './cargaFacturaReducer'

import api from '../../../libs/api'

import {
    CONSULTAR_INFORMACION,
    CONSULTAR_ERROR
} from '../../../types'


const  CargaFacturaState = props => {

    const initialState = {
        informacion: {
            receptor: '',
            rfc: '',
            fecha: '',
            total: '',
            subtotal: '',
            moneda: '',
            conceptos: []
        },
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(cargaFacturaReducer, initialState)

    // Serie de funciones

    // Mostrar barra
    const consultarInformacion = async (formData) => {

        try {
            const res = await api.convertirXml(formData)

            console.log(res);
            if(res.data !== undefined) {                     
                dispatch({
                    type: CONSULTAR_INFORMACION,
                    payload: res.data
                })
            }else{
                const alerta = {
                    msg: 'Debe ingresar un archivo xml con la estructura correcta',
                    categoria: 'alerta alerta-error'
                }
                dispatch({
                    type: CONSULTAR_ERROR,
                    payload: alerta
                })
            }
        } catch(error){
            const alerta = {
                msg: 'Debe ingresar un archivo xml con la estructura correcta',
                categoria: 'alerta alerta-error'
            }

            dispatch({
                type: CONSULTAR_ERROR,
                payload: alerta
            })
        }
        
    }
        
    return (
        <cargaFacturaContext.Provider
            value={{
                informacion: state.informacion,
                mensaje: state.mensaje,
                consultarInformacion,
            }}
        >
            { props.children }
        </cargaFacturaContext.Provider>
    )
}

export default  CargaFacturaState