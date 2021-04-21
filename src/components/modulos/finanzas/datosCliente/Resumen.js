import { Fragment } from 'react';

// se importan los componentes
import DatosPersonales from './DatosPersonales'
import DatosFiscales from './DatosFiscales'
import DatosBancarios from './DatosBancarios'

const Resumen = () => {
    return (
        <Fragment>
            <h1>Datos Personales</h1>
            <DatosPersonales estado={true}/>
            <h1>Datos Fiscales</h1>
            <DatosFiscales estado={true}/>
            <h1>Datos Bancarios</h1>
            <DatosBancarios estado={true}/>
        </Fragment>
    );
}
 
export default Resumen