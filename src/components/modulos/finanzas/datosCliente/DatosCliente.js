// se importan las librerias
import { Fragment, useContext, useEffect } from 'react';
import {
    Fade,
    CssBaseline,
    Typography,
    Paper
} from '@material-ui/core/';

// se importan los componentes
import ProgresBarCliente from '../../finanzas/datosCliente/PogresBarCliente'
import Modal from '../../Modal'

// se importan las imagenes
import imagenes from '../../../../img/asets/imagenes';

// se importan los estlos
import { styleRegistroObra } from '../../../../styles/bi/stylesBi'

// se importan los context
import modalContext from '../../../../context/modal/modalContext'
import datosClienteContext from '../../../../context/finanzas/datosCliente/datosClienteContext'
import alertaContext from '../../../../context/alertas/alertaContext'

// se crea y exporta el componente
export default function DatosCliente() {
    const classes = styleRegistroObra();

    

    const datosClientesContext = useContext(datosClienteContext)
    const { mensaje } = datosClientesContext

    // Extraer los valores del context de alerta
    const alertasContext = useContext(alertaContext)
    const { mostrarAlerta } = alertasContext


    

    useEffect(() => {
        if(mensaje){
          mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
      }, [mensaje])


    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Fade in={true}>
                    <Paper className={classes.paper}>
                    <div>
                        <img style={{width: 200}} src={imagenes.imgjpg} alt='PALA' />
                    </div>
                        <Typography variant="h4" align="center" component='div'>
                            <h5>DATOS DEL CLIENTE<hr className={classes.hr}/></h5>
                        </Typography>
                        <br/>
                        <ProgresBarCliente/>
                    </Paper>
                </Fade>
            </main>
            <Modal/>
        </Fragment>
    );
}
