// se importan las librerias y hooks
import { Fragment, useContext } from 'react';
import { Grid, TextField, Box } from '@material-ui/core';

// se importan los estlos
import { styleCargaFacturas } from '../../../../styles/bi/stylesBi'

// se importan los context
import cargaFacturaContext from '../../../../context/contabilidad/cargaFacturas/cargaFacturaContext'

const DatosGenerales = () => {

    const css = styleCargaFacturas()

    // se extrae la informacion del context
    const cargaFacturasContext = useContext(cargaFacturaContext)
    const { informacion } = cargaFacturasContext

    const { receptor, rfc, fecha, total, subtotal, moneda } = informacion

    return (
        <Fragment>
            <Box className={css.box}>
            <Grid
                container
                spacing={5}
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12} md={5}>
                    <TextField
                        id="receptor"
                        name="receptor"
                        label="Receptor"
                        value={receptor}
                        className={css.ancho}
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField
                        id="rfc"
                        name="rfc"
                        label="RFC"
                        value={rfc}
                        className={css.ancho}
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField
                        id="fecha"
                        name="fecha"
                        label="fecha"
                        value={fecha}
                        className={css.ancho}
                        color="primary"
                    />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={5}
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12} md={2}>
                    <TextField
                        id="total"
                        name="total"
                        label="Total"
                        value={total}
                        className={css.ancho}
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField
                        id="subtotal"
                        name="subtotal"
                        label="Subtotal"
                        value={subtotal}
                        className={css.ancho}
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12} md={1}>
                    <TextField
                        id="moneda"
                        name="moneda"
                        label="Moneda"
                        value={moneda}
                        className={css.ancho}
                        color="primary"
                    />
                </Grid>
            </Grid>
            </Box>
        </Fragment>
    );
}
 
export default DatosGenerales;