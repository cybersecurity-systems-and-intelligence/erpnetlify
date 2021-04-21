// se importan las librerias y hooks
import { Fragment, useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { Grid, Card, Fab } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

// se importan los estilos
import { styleCargaFacturas, themeCargaFacturas, ButtonCargaFacturas } from '../../../../styles/bi/stylesBi'


// se importan los componentes
import TablaPartidas from './TablaPartidas'

// se importan los context
import registroObraContext from '../../../../context/controlObra/registroObra/registroObraContext'
import alertaContext from '../../../../context/alertas/alertaContext'

// se crea y exporta el componente
export default function CargaFactura () {

    const css = styleCargaFacturas()

    //hook para guardar el archivo
    const { register, handleSubmit } = useForm()

    // hook para manejar el nombre del archivo
    const [ nombrefichero, guardarNombreFichero ] = useState(`Buscar fichero...`)
    
    // se extrae la informacion del context
    const registroObrasContext = useContext(registroObraContext)
    const { mensaje, guardarPartidas } = registroObrasContext

    const alertasContext = useContext(alertaContext)
    const { mostrarAlerta } = alertasContext

    useEffect(() => {

        // si el mensaje es distinto a null se mostrará
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    }, [mensaje])

    // se actualiza el nombre segun el archivo seleccionado
    const cambiarTexto = e => {
        guardarNombreFichero(e.target.files[0].name);
    }

    // submit para cargar el archivo
    const onSubmitCarga = async (data) => {

        try{

            const formData = new FormData()

            formData.append("file", data.file[0])

            if(data.file[0].type !=='application/vnd.ms-excel'){
                mostrarAlerta('Debe ingresar un archivo csv con la estructura correcta', 'alerta alerta-error')
                return
            }
            await guardarPartidas(formData)
        } catch {
            mostrarAlerta('Debe ingresar un archivo csv con la estructura correcta', 'alerta alerta-error')
            return
        }
    }

    return (
        <Fragment>
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
                            <h3>SELECCIONE UN FICHERO .CSV</h3>
                                <label>
                                    <input
                                        ref={register}
                                        type="file"
                                        name="file"
                                        accept=".csv"
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

            <TablaPartidas/>
        </Fragment>
    );
}

