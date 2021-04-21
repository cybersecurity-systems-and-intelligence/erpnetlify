import { useReducer } from 'react'
import registroObraContext from './registroObraContext'
import registroObraReducer from './registroObraReducer'

import api from '../../../libs/api'

import {
    INFO_GENERAL,
    ERROR_REGISTRO_OBRA,
    HANDLE_CHANGE,
    HANDLE_CHANGE_FECHA,
    CARGAR_CONCEPTOS,
    CAMBIAR_ESTADO,
    CREAR_OBRA
} from '../../../types/index'


const  RegistroObraState = props => {

    const initialState = {
        nombreObra: '',
        montoTotal: '',
        numeroContrato: '',
        fechaContrato: new Date(),
        fechaInicio: new Date(),
        fechaFin: new Date(),
        partidas: [],
        mensaje: null,
        estadoInput: false
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(registroObraReducer, initialState)

    // Serie de funciones

    // 
    const guardarInfoGeneral = (objeto) => {
        try{
            dispatch({
                type: INFO_GENERAL,
                payload: objeto
            })
        } catch(err) {
            const alerta = {
                msg: 'Error inesperado',
                categoria: 'alerta alerta-error'
            }
            dispatch({
                type: ERROR_REGISTRO_OBRA,
                payload: alerta
            })
        }
        
    }    

    const handleChangeDatos = e => {
        dispatch({
            type: HANDLE_CHANGE,
            payload: e
        })
    }        

    const handleChangeFechas = (name, value) => {
        const objeto = {
            name,
            value
        }
        dispatch({
            type: HANDLE_CHANGE_FECHA,
            payload: objeto
        })
    }     

    const guardarPartidas = async (formData) => {
        try {
            const res = await api.consultarItems(formData)

            if(res.data.length > 0) {
                
                dispatch({
                    type: CARGAR_CONCEPTOS,
                    payload: res.data
                })
            }else{
                const alerta = {
                    msg: 'Debe ingresar un archivo csv con la estructura correcta',
                    categoria: 'alerta alerta-error'
                }
                dispatch({
                    type: ERROR_REGISTRO_OBRA,
                    payload: alerta
                })
            }
        } catch(error) {
            const alerta = {
                msg: 'Debe ingresar un archivo csv con la estructura correcta',
                categoria: 'alerta alerta-error'
            }
            dispatch({
                type: ERROR_REGISTRO_OBRA,
                payload: alerta
            })
        }
    }

    const cambiarEstado = (estado) => {
        dispatch({
            type: CAMBIAR_ESTADO,
            payload: estado
        })
    }

    const submitObra = async () =>{


        try {

            const objeto = {
                nombre_obra: state.nombreObra,
                monto_total_obra: state.montoTotal,
                numero_contrato_obra: state.numeroContrato,
                ubicacion_obra: 'aqui va la hubicacion',
                fecha_contrato_obra: state.fechaContrato,
                fecha_inicio_obra: state.fechaInicio,
                fecha_fin_obra: state.fechaFin,
                partidas_obra: state.partidas
            }

            const guardar = await api.crearObra(objeto)

            const alerta = {
                msg: 'La obra ha sido registrada correctamente',
                categoria: 'alerta alerta-error'
            }

            dispatch({
                type: CREAR_OBRA,
                payload: alerta
            })

        } catch {
            const alerta = {
                msg: 'Hubo un error al registrar la obra',
                categoria: 'alerta alerta-error'
            }
            dispatch({
                type: ERROR_REGISTRO_OBRA,
                payload: alerta
            })
        }
    }

    return (
        <registroObraContext.Provider
            value={{
                nombreObra: state.nombreObra,
                montoTotal: state.montoTotal,
                numeroContrato: state.numeroContrato,
                fechaContrato: state.fechaContrato,
                fechaInicio: state.fechaInicio,
                fechaFin: state.fechaFin,
                partidas: state.partidas,
                estadoInput: state.estadoInput,
                guardarInfoGeneral,
                guardarPartidas,
                handleChangeDatos,
                handleChangeFechas,
                cambiarEstado,
                submitObra
            }}
        >
            { props.children }
        </registroObraContext.Provider>
    )
}

export default  RegistroObraState