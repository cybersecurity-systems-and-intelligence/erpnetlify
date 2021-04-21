// se importan las librerias
import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'

// se importan los context
import authContext from '../../context/autenticacion/authContext'

// se crea el componente
const RutaPrivada = ( { component: Component, ...props } ) => {

    // Extraer la informacion de autenticacion
    const authsContext = useContext(authContext)
    const { autenticado, cargando, usuarioAutenticado } = authsContext

    // Se autentica al usuario
    useEffect(() => {
        usuarioAutenticado()
    }, [])

    return (
        <Route {...props} render={props => !autenticado && !cargando ? (
            <Redirect to='/'/>
        ) : (
            <Component {...props}/>
        ) } />
    );
}
 
export default RutaPrivada;