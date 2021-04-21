// se importan las librerias y hooks
import { useState, useContext } from 'react';
import { Grid, Card, Fab} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { useForm } from 'react-hook-form'

// se importan los estlos
import {
    styleCargaFacturas,
    themeCargaFacturas,
    ButtonCargaFacturas
} from '../../../../styles/bi/stylesBi'

// se importan los context
import cargaFacturaContext from '../../../../context/contabilidad/cargaFacturas/cargaFacturaContext'
import alertaContext from '../../../../context/alertas/alertaContext'

export default function CargarArchivo() {

    const css = styleCargaFacturas()

    // Extraer los valores del context de la factura
    const cargaFacturasContext = useContext(cargaFacturaContext)
    const { consultarInformacion } = cargaFacturasContext

    // Extraer los valores del context de alerta
    const alertasContext = useContext(alertaContext)
    const { mostrarAlerta } = alertasContext

    //hook para guardar el archivo
    const { register, handleSubmit } = useForm()

    // hook para manejar el nombre del archivo
    const [nombrefichero, guardarNombreFichero] = useState(`Buscar fichero...`)

    // se actualiza el nombre segun el archivo seleccionado
    const cambiarTexto = e => {
        guardarNombreFichero(e.target.files[0].name);
    }

    // submit para cargar el archivo
    const onSubmitCarga = async (data) => {
        try{
            const formData = new FormData()
            formData.append("file", data.file[0])

            if(data.file[0].type !=='text/xml'){
                mostrarAlerta('Debe ingresar un archivo xml con la estructura correcta', 'alerta alerta-error')
                return
            }
            await consultarInformacion(formData)
        }catch{
            mostrarAlerta('Debe ingresar un archivo xml con la estructura correcta', 'alerta alerta-error')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmitCarga)}>
                <ThemeProvider theme={themeCargaFacturas}>
                    <Grid 
                        container
                        spacing={3}
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12} md={3}>
                            <Card className={css.cardIn}>
                            <h3>SELECCIONE UN FICHERO .XML</h3>
                                <label>
                                    <input
                                        ref={register}
                                        type="file"
                                        name="file"
                                        accept=".xml"
                                        onChange={cambiarTexto}
                                        style={{ display: "none" }}
                                    />
                                    <Fab
                                        color="secondary"
                                        size="large"
                                        component="span"
                                        aria-label="add"
                                        variant="extended"
                                    >
                                    {nombrefichero}
                                    </Fab>
                                </label>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={3}>
                            <ButtonCargaFacturas>AÑADIR</ButtonCargaFacturas>
                        </Grid>
                </ThemeProvider>
            </form>
    );
}
