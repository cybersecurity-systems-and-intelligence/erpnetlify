// se importan las librerias
import { Fragment, useContext } from 'react';
import { Box, TextField, withStyles } from '@material-ui/core';

// Se importan los estilos
import { styleDatos } from '../../../../styles/bi/stylesBi'

// se importan los context
import datosClienteContext from '../../../../context/finanzas/datosCliente/datosClienteContext'

const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: '#1565c0',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: '#64b5f6',
        borderWidth: 1,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 5,
        padding: '4px !important',
      },
    },
  })(TextField);
  
const DatosBancarios = ({ estado }) => {

    const css = styleDatos()

    // se extrae la informacion del context
    const datosClientesContext = useContext(datosClienteContext)
    const { datosBancarios, guardarDatosBancarios } = datosClientesContext

    const handleDatos = (e) => {
      guardarDatosBancarios(e.target.name, e.target.value)
    }


    return (
        <Fragment>
            <Box className={css.box}>
                <form className={css.root} noValidate autoComplete="off">
                    <ValidationTextField
                        disabled={estado}
                        label="Numero de clave"
                        required
                        variant="outlined"
                        name='numeroClave'
                        value={datosBancarios.numeroClave}
                        onChange={handleDatos}
                    />
                    <ValidationTextField
                        disabled={estado}
                        label="Cuenta"
                        required
                        variant="outlined"
                        name='cuenta'
                        value={datosBancarios.cuenta}
                        onChange={handleDatos}
                    />
                    <ValidationTextField
                        disabled={estado}
                        label="Razon social"
                        required
                        variant="outlined"
                        name='razonSocial'
                        value={datosBancarios.razonSocial}
                        onChange={handleDatos}
                    />                   
                </form>
            </Box>
        </Fragment>
    );
}
export default DatosBancarios;