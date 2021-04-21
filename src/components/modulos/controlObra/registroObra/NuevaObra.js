// se importan las librerias y hooks
import { useContext } from 'react';
import {  Fragment  } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Grid, Box, InputLabel, FormControl, InputAdornment } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// se importa los estilos
import { NuevaObraStyle, BootstrapInput} from '../../../../styles/bi/stylesBi'

// se importan los context
import registroObraContext from '../../../../context/controlObra/registroObra/registroObraContext'

const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#2286c3',
      },
    },
  });

// se crea y exporta el componente
export default function NuevaObra({ estado }) {

  const classes = NuevaObraStyle();

  // extrae la informacion del context
  const registroObrasContext = useContext(registroObraContext)
  const { 
    nombreObra,
    montoTotal,
    numeroContrato,
    fechaContrato,
    fechaInicio,
    fechaFin,
    estadoInput,
    handleChangeDatos,
    handleChangeFechas
  } = registroObrasContext

  // guarda los cambios de las fechas
  const handleDateChange = (name, value) => {    
    handleChangeFechas(name, value)
  };

  // guarda los cambios de los input
  const handleChange = e => {
    handleChangeDatos(e)
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
                    <b>Nombre de la obra</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='nombreObra' onChange={handleChange} value={nombreObra} />
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Monto total</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} startAdornment={<InputAdornment position="start"><b>$</b></InputAdornment>} name='montoTotal' onChange={handleChange} value={montoTotal}/>
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Numero de contrato</b>
                  </InputLabel>
                  <BootstrapInput disabled={estado} name='numeroContrato' onChange={handleChange} value={numeroContrato} />
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Grid container spacing={3}>
              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Fecha de contrato</b>
                  </InputLabel>
                  <KeyboardDatePicker
                      disabled={estado}
                      margin="normal"
                      color="secondary"
                      name='fechaContrato'
                      format="MM/dd/yyyy"
                      value={fechaContrato}
                      onChange={(e) => handleDateChange( 'fechaContrato', e)}
                      KeyboardButtonProps={{'aria-label': 'change date',}}
                  />
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Inicio de obra</b>
                  </InputLabel>
                  <KeyboardDatePicker
                      disabled={estado}
                      margin="normal"
                      color="secondary"
                      name='fechaInicio'
                      format="MM/dd/yyyy"
                      value={fechaInicio}
                      onChange={(e) => handleDateChange( 'fechaInicio', e)}
                      KeyboardButtonProps={{'aria-label': 'change date',}}
                  />
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Fin de obra</b>
                  </InputLabel>
                  <KeyboardDatePicker
                      disabled={estado}
                      margin="normal"
                      color="secondary"
                      name='fechaFin'
                      format="MM/dd/yyyy"
                      value={fechaFin}
                      onChange={(e) => handleDateChange( 'fechaFin', e)}
                      KeyboardButtonProps={{'aria-label': 'change date',}}
                  />
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