// se importan las librerias
import { useContext, useEffect } from 'react'

// se importan los componentes
import BarraModulos from '../../layout/BarraModulos'
import MenuModulos from '../../layout/MenuModulos'
import DatosCliente from './datosCliente/DatosCliente';

// Se importan los estilos
import { styleBi } from '../../../styles/bi/stylesBi'

// se importan los context
import barraContext from '../../../context/barras/barraContext'
import obrasContext from '../../../context/obras/obrasContext'
import alertaContext from '../../../context/alertas/alertaContext'
import datosClienteContext from '../../../context/finanzas/datosCliente/datosClienteContext'

// se crea y exporta el componente
export default function FINANZAS(props) {

  const classes = styleBi() 

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { numeroMenu } = barrasContext

  // Extraer los valores del context de alerta
  const alertasContext = useContext(alertaContext)
  const { alerta } = alertasContext

  // Extraer la informacion de obras
  const obrassContext = useContext(obrasContext)
  const { cargarObras } = obrassContext

  const datosClientesContext = useContext(datosClienteContext)
  const { datosPersonales } = datosClientesContext
  
  useEffect(() => {
    cargarObras()
  }, [])
  
  useEffect(() => {
    cargarObras()
  }, [datosPersonales])

  const paginas = () => {
    switch(numeroMenu){
      case 0:
        return <DatosCliente/>
    }
  }

  return (
    <div className={classes.root} align="center">
      { alerta ? ( <div className={`alerta alerta-error`}>{ alerta.msg }</div> ) : null }
      <BarraModulos/>
      <MenuModulos/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {
          paginas()
        }
      </main>
    </div>
  );
}