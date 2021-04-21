// Se importan las librerias
import { useContext } from 'react';
import { 
    Box,
    Drawer,
    IconButton,
} from '@material-ui/core';
import { CancelPresentationTwoTone } from '@material-ui/icons';

import clsx from 'clsx';


// se importan los componentes
import ListBi from '../modulos/finanzas/ListBi';
import ListControlObra from '../modulos/controlObra/ListControlObra'
import ListContabilidad from '../modulos/contabilidad/ListContabilidad'

// se importan los context
import barraContext from '../../context/barras/barraContext'

// Se importan los estilos
import { styleBi } from '../../styles/bi/stylesBi'

// se crea y exporta el componente
export default function MenuModulos() {

    const classes = styleBi()

    // Extraer la informacion de la barra
    const barrasContext = useContext(barraContext)
    const { barra, ocultarBarra, modulo } = barrasContext


    // se elige el menu segun el modulo seleccionado
    const menuModulo = () => {
        switch(modulo){
            case 'FINANZAS':
                return <ListBi/>
            case 'CONTROLOBRA':
                return <ListControlObra/>
            case 'CONTABILIDAD':
                return <ListContabilidad/>
        }
    }

    return (
        <Box style={{background:'#202444'}}>
        <Drawer
            variant="permanent"
            classes={{
            paper: clsx(classes.drawerPaper, !barra && classes.drawerPaperClose),
            }}
            open={barra}

        >
            <div style={{background:'#202444'}} >
                <IconButton onClick={ocultarBarra} className={classes.toolbarIcon}>
                    <CancelPresentationTwoTone fontSize="large" style={{color:'#c48b9f'}}/>
                </IconButton>

            </div>
            {
                menuModulo()
            }
    </Drawer>
    </Box>
    );
}