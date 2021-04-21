import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Modulos from './components/rutas/Modulos'
import Finanzas from './components/modulos/finanzas/Finanzas'
import ControlObra from './components/modulos/controlObra/ControlObra'
import Contabilidad from './components/modulos/contabilidad/Contabilidad'

// se importan los state
import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import BarraState from './context/barras/barraState'
import RegistroObraState from './context/controlObra/registroObra/registroObraState'
import CargaFacturaState from './context/contabilidad/cargaFacturas/cargaFacturaState'
import ModalState from './context/modal/modalState'
import ObrasState from './context/obras/obrasState'
import DatosClienteState from './context/finanzas/datosCliente/datosClienteState'


import tokenAuth from './config/token'
import RutaPrivada from './components/rutas/RutaPrivada'
import RutaPrivadaLogin from './components/rutas/RutaPrivadaLogin'
import PageNotFound from './components/rutas/PageNotFound'

// Revisar si tenemos un token
const token = JSON.parse(localStorage.getItem('accessToken'))
if ( token ) {
  tokenAuth(token)  
}


function App() {

  return (
    <AlertaState>
      <AuthState>
        <BarraState>
          <RegistroObraState>
            <ObrasState>
              <CargaFacturaState>
                <DatosClienteState>
                  <ModalState>
                    <Router>
                      <Switch>
                        <RutaPrivadaLogin exact path='/' component={Login} />
                        <Route  path='/nueva-cuenta' component={NuevaCuenta} />
                        <RutaPrivada path='/modulos' component={Modulos} /> 
                        <RutaPrivada path='/FINANZAS' component={Finanzas} />  
                        <RutaPrivada path='/CONTROLOBRA' component={ControlObra}/>
                        <RutaPrivada path='/CONTABILIDAD' component={Contabilidad}/>
                        <Route component={PageNotFound}/>       
                      </Switch>
                    </Router>
                  </ModalState>
                </DatosClienteState>
              </CargaFacturaState>
            </ObrasState>
          </RegistroObraState>
        </BarraState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
