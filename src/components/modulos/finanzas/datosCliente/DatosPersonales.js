// se importan las librerias
import { Fragment, useContext } from 'react';
import { Box, TextField, withStyles } from '@material-ui/core';

// se importan los estlos
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
        padding: '4px !important', // override inline-style
      },
    },
})(TextField);

const DatosPersonales = ({ estado }) => {

    const css = styleDatos()

    // se extrae la informacion del context
    const datosClientesContext = useContext(datosClienteContext)
    const { datosPersonales, guardarDatosPersonales } = datosClientesContext

    const handleDatos = (e) => {
      guardarDatosPersonales(e.target.name, e.target.value)
    }

    return (
        <Fragment>
            <Box className={css.box}>
                <form className={css.root} noValidate autoComplete="off">
                    <ValidationTextField
                        disabled={estado}
                        label="Nombre"
                        required
                        variant="outlined"
                        name='nombre'
                        value={datosPersonales.nombre}
                        onChange={handleDatos}
                    />
                    <ValidationTextField
                        disabled={estado}
                        label="Correo electronico"
                        required
                        variant="outlined"
                        name='correo'
                        value={datosPersonales.correo}
                        onChange={handleDatos}
                    />
                    <ValidationTextField
                        disabled={estado}
                        label="Telefono fijo"
                        required
                        variant="outlined"
                        name='telefonoFijo'
                        value={datosPersonales.telefonoFijo}
                        onChange={handleDatos}
                    />
                    <ValidationTextField
                        disabled={estado}
                        label="Telefono movil"
                        required
                        variant="outlined"
                        name='telefonoMovil'
                        value={datosPersonales.telefonoMovil}
                        onChange={handleDatos}
                    />                     
                </form>
            </Box>
        </Fragment>
    );
}
export default DatosPersonales;