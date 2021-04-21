// se importan las librerias
import { useState, useContext, useEffect } from 'react';
import { makeStyles, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';

// se importan los componentes
import Copyright from '../../../layout/Copyright';
import DatosPersonales from './DatosPersonales';
import DatosFiscales from './DatosFiscales';
import DatosBancarios from './DatosBancarios';
import ObrasExistentes from './ObrasExistentes'
import Resumen from './Resumen'

// se importan los context
import alertaContext from '../../../../context/alertas/alertaContext'
import datosClienteContext from '../../../../context/finanzas/datosCliente/datosClienteContext'
import modalContext from '../../../../context/modal/modalContext'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignItems: 'center'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Seleccionar obra', 'Datos personales', 'Datos fiscales','Datos bancarios','Revision de datos'];
}



export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [ activeStep, setActiveStep ] = useState(0);
  const steps = getSteps();

  // Extraer los valores del context de alerta
  const alertasContext = useContext(alertaContext)
  const {mostrarAlerta } = alertasContext

  // se extrae la informacion del context de modal
  const modalsContext = useContext(modalContext)
  const { peticion, estadoModal } = modalsContext

  const datosClientesContext = useContext(datosClienteContext)
  const { obraSeleccionada, datosPersonales, datosFiscales, datosBancarios, submitCliente } = datosClientesContext

  useEffect(() => {
    if(peticion){
        submitCliente()
        setActiveStep(0);       
    }
  }, [peticion])

  const handleNext = () => {
    
    console.log(obraSeleccionada.folio_obra)
    
    if (activeStep === 0 && obraSeleccionada.folio_obra === undefined) {
      mostrarAlerta('Selecciona una obra', 'alerta-error')
      return
    }
    if (activeStep === 1 && (datosPersonales.nombre === '' || datosPersonales.correo === '' || datosPersonales.telefonoFijo === '' || datosPersonales.telefonoMovil === '')) {
      mostrarAlerta('Rellena todos los datos', 'alerta-error')
      return
    }

    if (activeStep === 2 && ( datosFiscales.nombreEmpresa === '' || datosFiscales.rfc === '' || datosFiscales.direccionFiscal === '' || datosFiscales.direccionOficina === '' )){
      mostrarAlerta('Rellena todos los datos', 'alerta-error')
      return
    }
    if (activeStep === 2 && ( datosFiscales.calleReferencia1 === '' || datosFiscales.calleReferencia2 === '' || datosFiscales.cp === '' || datosFiscales.colonia === '' )){
      mostrarAlerta('Rellena todos los datos', 'alerta-error')
      return
    }
    if (activeStep === 2 && ( datosFiscales.ciudad === '' || datosFiscales.estado === '' )){
      mostrarAlerta('Rellena todos los datos', 'alerta-error')
      return
    }

    if (activeStep === 3 && ( datosBancarios.numeroClave === '' || datosBancarios.cuenta === '' || datosBancarios.razonSocial === '' )){
      mostrarAlerta('Rellena todos los datos', 'alerta-error')
      return
    }
    if(activeStep === 4){
      estadoModal(true)
      return
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {   
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <ObrasExistentes/>
      case 1:
        return <DatosPersonales estado={false}/>;
      case 2:
        return <DatosFiscales estado={false}/>;
      case 3:
        return <DatosBancarios estado={false}/>;
      case 4:
        return <Resumen/>
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Copyright/>
    </div>
    
  );
}