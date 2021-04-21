// se importan las librerias
import { useContext } from 'react';
import { ExitToApp } from '@material-ui/icons/';
import { Avatar, Grid } from '@material-ui/core';
import randomColor from "randomcolor";

// se importan los context
import authContext from '../../context/autenticacion/authContext'

// se importan las imagenes o archivos
import imagenes from '../../asets/img/imagenes';

// se importan los estilos
import { styleModulos } from '../../styles/styles'

let color = randomColor();

// se crea y exporta el componente
export default function Barra () {

    const classes = styleModulos();

    // Extraer la informacion de autenticacion
    const authsContext = useContext(authContext)
    const { usuario, cerrarSesion } = authsContext    
    
    // Retornar iniciales del nombre del usuario
    const inicialesNombre = (user) => {
        let word1 = '', word2 = ''
        try{ 
            let value = user.nombre_usuario.split(' ')
            word1 = value[0].slice(0,1)
            word2 = value[1].slice(0,1)
        }catch(error){}
        return  word1 + word2
        
    }

    return (
        
        <header className='app-header' className={classes.nav}>
            <Grid container style={{margin: '0 auto', padding:'7px'}} >
                <Grid container spacing={3}>
                    <Grid item xs>
                        <table>
                            <tr>
                                <td>
                                    <Avatar style={{background:color}}>{ usuario ? <b>{ inicialesNombre(usuario) }</b> : null }</Avatar>   
                                </td>
                                <td>
                                    { usuario ? <span><b>{usuario.nombre_usuario}</b></span> : null }
                                </td>
                            </tr>
                        </table>
                    </Grid>

                    <Grid item xs>
                        <div className={classes.navLogo}><img title='logo pala' style={{width:140}} src={imagenes.imgjpg} alt='PALA' /></div>
                    </Grid>

                    <Grid item xs >
                        <div className={classes.navExit}>
                            <ExitToApp
                                className={classes.close}
                                onClick={() => cerrarSesion()}
                            />
                        </div>
                    </Grid>
                    
                </Grid>
            </Grid>
        </header>
    );
}