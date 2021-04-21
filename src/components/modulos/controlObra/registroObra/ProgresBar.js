
import { useState, useContext, useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Copyright from '../../../layout/Copyright';

// se importan los estilos
import { styleProgressBar } from '../../../../styles/bi/stylesBi'

// se importan los componentes
import CargaFactura from './CargaFactura'
import NuevaObra from './NuevaObra';
import Resumen from './Resumen';

// se importan los context
import registroObraContext from '../../../../context/controlObra/registroObra/registroObraContext'
import alertaContext from '../../../../context/alertas/alertaContext'
import modalContext from '../../../../context/modal/modalContext'


// se crean los encabezados del progress bar
function getSteps() {
  return ['Nueva obra', 'Cargar cotización', 'Revision de datos'];
}



export default function HorizontalLabelPositionBelowStepper() {
  const classes = styleProgressBar();

  //state para manejar en que paso va
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  // se extrae la informacion del context
  const registroObrasContext = useContext(registroObraContext)
  const { 
    nombreObra,
    montoTotal,
    numeroContrato,
    partidas,
    cambiarEstado,
    submitObra
  } = registroObrasContext

  // Extraer los valores del context de alerta
  const alertasContext = useContext(alertaContext)
  const { mostrarAlerta } = alertasContext

  const modalsContext = useContext(modalContext)
  const { peticion, estadoModal } = modalsContext

  useEffect(() => {
    if(peticion){
        submitObra()
        setActiveStep(0);
    }
  }, [peticion])


  const handleNext = () => {
    if (activeStep === 0 && (nombreObra.trim() === '' || montoTotal.trim() === '' || numeroContrato.trim() === '')){
      mostrarAlerta('Debe de ingresar todos los campos', 'alerta alerta-error')
      return
    }
    if (activeStep === 1 && partidas.length === 0 ){
      mostrarAlerta('Debe ingresar un archivo csv con la estructura correcta', 'alerta alerta-error')
      return
    }
    if(activeStep === 0){
      cambiarEstado(true)
    }
    
    if(activeStep === 2){
      estadoModal(true)
      return
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if(activeStep === 1){
      cambiarEstado(false)
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <NuevaObra estado={false}/>;
      case 1:
        return <CargaFactura estado={false}/>;
      case 2:
        return <Resumen/>;
      default:
        return 'guardado';
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