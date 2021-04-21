
// se importan las librerias y hooks
import { Fragment } from 'react';

// se importan los componentes
import DatosGenerales from './DatosGenerales'
import TablaConceptos from './TablaConceptos'
import CargarArchivo from './CargarArchivo'

// se crea y exporta el componente
export default function LecturaXML () {

    

    return (
        <Fragment>            
            <CargarArchivo/>
            <DatosGenerales/>
            <br/>
            <TablaConceptos/>
        </Fragment>
        
    );
}

