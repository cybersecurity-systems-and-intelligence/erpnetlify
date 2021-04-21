import { useReducer } from 'react'

import authContext from './authContext'
import authReducer from './authReducer'

import clienteAxios from '../../config/axios'
import api from '../../libs/api'
import tokenAuth from '../../config/token'

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types'

const AuthState = props => {
    
    const initialState = {
        token: JSON.parse(localStorage.getItem('accessToken')),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState)

    const registrarUsuario = async (datos) => {
        try{
            const respuesta = await clienteAxios.post(`/usuarios`, datos)            

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })

            // Obtener el usuario
            usuarioAutenticado()

        } catch (error) {

            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }
    // Retornar el usuario autenticado
    const usuarioAutenticado = async () => {
        
        const token = JSON.parse(localStorage.getItem('accessToken'))

        if(token) {
            // TODO: Funcion para enviar el token por headers
            tokenAuth(token)
        }

        try {
            const respuesta = await api.auth()

            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })

        } catch (error) {
            console.log('erre',error.response)
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // Cuando el usuario inicia sesion 
    const iniciarSesion = async datos => {
        try{
    
            const respuesta = await api.login(datos) 

            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })

            // Obtener el usuario
            usuarioAutenticado()

        } catch (error) {
            console.log('err',error)

            const alerta = {
                msg: 'Correo o cotrase;a incorrectos',
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    // Cierra la sesion del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion
            }}
        >
            { props.children }
        </authContext.Provider>
    )

}

export default AuthState