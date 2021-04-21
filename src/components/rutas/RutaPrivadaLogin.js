// se importan las librerias
import { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'

// se importan los context
import authContext from '../../context/autenticacion/authContext'

// se crea el componente
const RutaPrivadaLogin = ( { component: Component, ...props } ) => {

    // Extraer la informacion de autenticacion
    const authsContext = useContext(authContext)
    const { autenticado, usuarioAutenticado } = authsContext
    
    // Se autentica al usuario
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('accessToken'))
        if(token){
            usuarioAutenticado()
        }        
    }, [])

    return (
        <Route {...props} render={props => autenticado ? (            
            <Redirect to='/modulos'/>
        ) : (
            <Component {...props}/>
        ) } />
    );
}
 
export default RutaPrivadaLogin;