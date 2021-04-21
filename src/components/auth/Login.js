// se importan las librerias
import { useState, useContext, useEffect } from 'react';
import {
    createMuiTheme,
    Grid,
    Typography,
    Container,
    Button,
    CssBaseline,
    TextField
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Link } from 'react-router-dom'

// se importan los context
import alertaContext from '../../context/alertas/alertaContext'
import authContext from '../../context/autenticacion/authContext'

// se importan las imagenes o archivos
import imagenes from '../../asets/img/imagenes';

// se importan los estilos
import { styleLogin } from '../../styles/styles'

// se crea el tema
const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#b3d233',
      },
    },
});

// se crea el componente
const Login = props => {

    // Se importa el estilo del login
    const classes = styleLogin();

    // Extraer los valores del context
    const alertasContext = useContext(alertaContext)
    const { alerta, mostrarAlerta } = alertasContext

    const authsContext = useContext(authContext)
    const { mensaje, autenticado, iniciarSesion } = authsContext

    // State para iniciar sesion
    const [ usuario, guardarUsuario ] = useState({
        correo: '',
        password: ''
    })

    // se extrae la informacion del state del usuario
    const { correo, password } = usuario

    // En caso de que el password o usuario sean incorrectos
    useEffect(() => {
        if(autenticado){
            props.history.push('/modulos')
        }
        
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)     
        }
    }, [mensaje, autenticado, props.history])

    // Se guardan los datos que se escriban en los input
    const handleChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesion
    const handleSubmit = e => {
        e.preventDefault()

        // Validar que no haya campos vacios
        if ( correo.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
            return
        }

        // Pasarlo al action
        iniciarSesion(usuario)
    }


    return ( 
        <Container component="main" maxWidth="xs">
            { alerta ? ( <div className={`alerta alerta-error`}>{ alerta.msg }</div> ) : null }
            <CssBaseline />
            <div className={classes.paper}>
                <div>
                    <img style={{width: 200}} src={imagenes.imgjpg} alt='PALA' />
                </div>
                <Typography component="h1" variant="h5" className={classes.letra}>
                    INICIA SESIÓN
                    <hr className={classes.hr}/>
                </Typography>
                <form 
                    className={classes.form} noValidate
                    onSubmit={handleSubmit}   
                >
                    <ThemeProvider theme={theme}>
                        <TextField
                            color="secondary"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="correo"
                            label="Correo:"
                            name="correo"
                            autoComplete="correo"
                            autoFocus
                            value={correo}
                            onChange={handleChange}
                        />                
                        <TextField
                            color="secondary"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña:"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handleChange}
                        />     
                    </ThemeProvider>           
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        Ingresar
                    </Button>                
                    <Grid container>
                        <Grid item>
                            {/* <Link href="#" variant="body2" onClick={registarse}>
                                {"Registrate"}
                            </Link> */}
                            <Link to={'/nueva-cuenta'} className='enlace-cuenta'>Crear cuenta</Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
        
     );
}
 
export default Login;