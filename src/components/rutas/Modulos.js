// se importan las librerias

import React, { useContext, useEffect, Fragment } from 'react';
import Copyright from '../../../src/components/layout/Copyright';

import { 
    Grid,
    Typography,
    Container,
    CssBaseline,
    Card,
    CardActionArea,
    ListItem,
    CardActions,
    CardContent
} from '@material-ui/core';
import {
    LocalMallTwoTone,
    ListAltTwoTone,
    MonetizationOnTwoTone,
    AssignmentTurnedInTwoTone,
    DashboardTwoTone,
    NotificationsActiveTwoTone
} from '@material-ui/icons/'


// se importan componentes
import Barra from '../layout/Barra'

// se importan los context
import authContext from '../../context/autenticacion/authContext'
import barraContext from '../../context/barras/barraContext'
import obrasContext from '../../context/obras/obrasContext'

// se importan los estilos
import { styleModulos } from '../../styles/styles'

// se crea el componente
const Proyectos = (props) => {

    // se instancia el estilo
    const css = styleModulos();

    // Extraer la informacion de autenticacion
    const authsContext = useContext(authContext)
    const { usuarioAutenticado } = authsContext

    // Extraer la informacion de barra
    const barrasContext = useContext(barraContext)
    const { seleccionarModulo } = barrasContext

    

    // se autentica el usuario
    useEffect(() => {
        usuarioAutenticado()        
    }, [])
    // arreglo de los documentos con la informaicon de los modulos
    const rows = [
        { id: 1, nombre: 'COMPRAS', rutamodulo: 'COMPRAS',color: '#B3D233', ico: <LocalMallTwoTone className={css.iconSize}/>},
        { id: 2, nombre: 'INVENTARIOS', rutamodulo: 'INVENTARIOS', color: '#FFD180', ico: <ListAltTwoTone className={css.iconSize}/> },
        { id: 3, nombre: 'CONTABILIDAD', rutamodulo: 'CONTABILIDAD', color: '#969CEC', ico: <MonetizationOnTwoTone className={css.iconSize}/> },
        { id: 4, nombre: 'CONTROL DE OBRA', rutamodulo: 'CONTROLOBRA', color: '#DC6969', ico: <AssignmentTurnedInTwoTone className={css.iconSize}/> },
        { id: 5, nombre: 'DASHBOARD', rutamodulo: 'DASHBOARD', color: '#9076C5', ico: <DashboardTwoTone className={css.iconSize} /> },
        { id: 6, nombre: 'NOTIFY CENTER', rutamodulo: 'NOTIFYCENTER', color: '#75D69C', ico: <NotificationsActiveTwoTone className={css.iconSize}/> },
        { id: 7, nombre: 'FINANZAS', rutamodulo: 'FINANZAS', color: '#64b5f6', ico: <NotificationsActiveTwoTone className={css.iconSize}/> },
    ]

    // Seleccion del modulo a ingresar
    const selectModule = e => {
        const modulo = rows.filter(value => value.id == e.target.id)
        seleccionarModulo(modulo[0].rutamodulo, modulo[0].color)

        props.history.push(`/${modulo[0].rutamodulo}`)
    }

    return (
        <Fragment>
            <Barra/>
                <Container component="main">
                    <CssBaseline />
                    <div className={css.paper} align='center'>
                        <Typography component="h1" variant="h5" className={css.letra}>
                            SELECCIONA UN MODULO
                                <hr className={css.hr}/>
                        </Typography>
                    <br/>
                    <br/>
                <main>
                    <Grid container spacing={5}>
                        {rows.map((row) => (
                        <Grid item key={row.id} xs={12} sm={6} md={4}>
                            <Card className={css.card}  style={{background: row.color}} >
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h1" component="h2" className={css.title}>

                                            { row.nombre }
            
                                        </Typography>

                                        <Typography gutterBottom variant="h3" component="h2"   className={css.icon}>
    
                                            { row.ico }                                        
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <ListItem  button id={row.id} name={row.id} onClick={selectModule} style={{ color: 'white' }}>SELECCIONAR</ListItem >
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </main>
               <Copyright/>
            </div> 
        </Container>
        </Fragment>
    )
}
 
export default Proyectos;