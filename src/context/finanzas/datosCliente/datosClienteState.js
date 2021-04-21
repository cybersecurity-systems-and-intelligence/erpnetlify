import { useReducer } from 'react'
import datosClienteContext from './datosClienteContext'
import datosClienteReducer from './datosClienteReducer'

// se importan los metodos
import api from '../../../libs/api'

import {
    SELECCIONAR_OBRA,
    DATOS_PERSONALES,
    DATOS_FISCALES,
    DATOS_BANCARIOS,
    SUBMIT_CLIENTE,
    ERROR_REGISTRO_CLIENTE
} from '../../../types/index'


const DatosClienteState = props => {

    const initialState = {
        obraSeleccionada: {},
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
        },
        mensaje: null,
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(datosClienteReducer, initialState)

    // Serie de funciones    

    // seleccionar obra
    const seleccionarObra = (obra) => {
        dispatch({
            type: SELECCIONAR_OBRA,
            payload: obra
        })
    }

    // guardar datos personales en el state
    const guardarDatosPersonales = (name, value) => {
        const datos = {
            name,
            value
        }
        dispatch({
            type: DATOS_PERSONALES,
            payload: datos
        })
    }

    // guardar datos fiscales en el state
    const guardarDatosFiscales = (name, value) => {
        const datos = {
            name,
            value
        }
        dispatch({
            type: DATOS_FISCALES,
            payload: datos
        })
    }

    // guardar datos bancarios en el state
    const guardarDatosBancarios = (name, value) => {
        const datos = {
            name,
            value
        }
        dispatch({
            type: DATOS_BANCARIOS,
            payload: datos
        })
    }

    // guardar en bdd la informacion
    const submitCliente = async () => {
        try{
            const objeto = {
                obraSeleccionada: state.obraSeleccionada,
                datos_cliente: {
                    datos_personales: state.datosPersonales,
                    datos_fiscales: state.datosFiscales,
                    datos_bancarios: state.datosBancarios
                }
            }
            
            const resp = await api.registrarCliente(objeto)            
            dispatch({
                type: SUBMIT_CLIENTE
            })
            

        }catch{

            console.log('hssff');

            const alerta = {
                msg: 'No se ha guardado la información',
                categoria: 'alerta alerta-error'
            }
            
            dispatch({
                type: ERROR_REGISTRO_CLIENTE,
                payload: alerta
            })
        }
    }
        
    return (
        <datosClienteContext.Provider
            value={{
                obraSeleccionada: state.obraSeleccionada,
                datosPersonales: state.datosPersonales,
                datosFiscales: state.datosFiscales,
                datosBancarios: state.datosBancarios,
                mensaje: state.mensaje,
                seleccionarObra,
                guardarDatosPersonales,
                guardarDatosFiscales,
                guardarDatosBancarios,
                submitCliente
            }}
        >
            { props.children }
        </datosClienteContext.Provider>
    )
}

export default DatosClienteState