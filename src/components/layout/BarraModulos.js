// se importan las librerias
import { Fragment, useContext } from 'react';
import { 
    CssBaseline,
    AppBar,
    Toolbar, 
    IconButton,
    Badge,
    Typography,
    Avatar
} from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import clsx from 'clsx';
import randomColor from "randomcolor";

// se importan los context
import authContext from '../../context/autenticacion/authContext'
import barraContext from '../../context/barras/barraContext'

// Se importan los estilos
import { styleBi } from '../../styles/bi/stylesBi'

let color = randomColor();

// se crea y exporta el componente
export default function BarraModulos() {

    const classes = styleBi()     

    // Extraer la informacion de autenticacion
    const authsContext = useContext(authContext)
    const { usuario, cerrarSesion } = authsContext    

    // Extraer la informacion de la barra
    const barrasContext = useContext(barraContext)
    const { barra, mostrarBarra } = barrasContext    
    
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
        <Fragment>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, barra && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        onClick={mostrarBarra}
                        className={clsx(classes.menuButton, barra && classes.menuButtonHidden)}
                    >
                        <Avatar style={{background:color}}>{ usuario ? <b>{ inicialesNombre(usuario) }</b> : null }</Avatar>   
                    </IconButton>   
                    <Typography component="h1" variant="h6" color="inherit" align="center" noWrap className={classes.title}>
                        {
                            usuario ? <b>{ usuario.nombre_usuario }</b> : null
                        }
                    </Typography>
                    <IconButton align='right' color="inherit">
                        <Badge color="secondary">
                            <ExitToApp onClick={() => cerrarSesion()}/>
                        </Badge>
                    </IconButton>               
                </Toolbar>
            </AppBar>
      </Fragment>
    );
}