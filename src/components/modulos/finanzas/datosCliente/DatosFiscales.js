// se importan las librerias
import { Fragment, useContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Grid, Box, InputLabel, FormControl } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// se importan los estlos
import { NuevaObraStyle, BootstrapInput} from '../../../../styles/bi/stylesBi'

// se importan los context
import datosClienteContext from '../../../../context/finanzas/datosCliente/datosClienteContext'

const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#2286c3',
      },
    },
  });


 


export default function DatosFiscales({ estado }) {

  const classes = NuevaObraStyle();

  // se extrae la informacion del context
  const datosClientesContext = useContext(datosClienteContext)
  const { datosFiscales, guardarDatosFiscales } = datosClientesContext

  const handleDatos = (e) => {
    guardarDatosFiscales(e.target.name, e.target.value)
  }

return (
  <Fragment>
    <Box className={classes.box}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Box >
            <Grid container spacing={3}>
              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Nombre de Empresa o Persona Fisica</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='nombreEmpresa' value={datosFiscales.nombreEmpresa} onChange={handleDatos} />
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>RFC</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='rfc' value={datosFiscales.rfc} onChange={handleDatos}/>
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Direccion Fiscal</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='direccionFiscal' value={datosFiscales.direccionFiscal} onChange={handleDatos}/>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Grid container spacing={3}>
            <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Direccion Oficina</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='direccionOficina' value={datosFiscales.direccionOficina} onChange={handleDatos}/>
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Calle Referencia 1</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='calleReferencia1' value={datosFiscales.calleReferencia1} onChange={handleDatos}/>
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Calle Referencia 2</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='calleReferencia2' value={datosFiscales.calleReferencia2} onChange={handleDatos}/>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Grid container spacing={3}>
            <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Codigo Postal</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='cp' value={datosFiscales.cp} onChange={handleDatos}/>
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Colonia</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='colonia' value={datosFiscales.colonia} onChange={handleDatos}/>
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Ciudad</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='ciudad' value={datosFiscales.ciudad} onChange={handleDatos}/>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Grid container spacing={3}>
            <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Estado</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='estado' value={datosFiscales.estado} onChange={handleDatos}/>
                </FormControl>
              </Grid>            
            </Grid>
          </Box>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Box>
  </Fragment>
        );
}