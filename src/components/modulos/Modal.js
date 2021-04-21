
// se importan las librerias
import { useContext } from 'react'
import {Button, Dialog, DialogActions, DialogTitle, makeStyles, createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

// se importa los context
import modalContext from '../../context/modal/modalContext'

const useStyles = makeStyles({
  md:{
    background:'#f1f8e9',
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px',
  }
})
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b3d233',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
});

// se crea y se exporta el componente
export default function Modal() {
  
  const css = useStyles()

  // se extrae la informacion del context
  const modalsContext = useContext(modalContext)
  const { estado, estadoModal, realizarPeticion } = modalsContext

  const handleClose = () => {
    realizarPeticion(false)
    estadoModal(false);
    
  };

  const handleAcept = () => {
    realizarPeticion(true)
    estadoModal(false);
  };

  return (
    <div >
      <Dialog
      
        open={estado}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" 
        className={css.md}>
          {`✋🏻 ¿Estas seguro que quieres continuar?`}
        </DialogTitle>

        <ThemeProvider theme={theme}>
        <DialogActions >
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleAcept} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}