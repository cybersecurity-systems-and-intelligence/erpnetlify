// se importan las librerias y hooks
import {  Fragment  } from 'react';

// se importan los componentes
import TablaPartidas from './TablaPartidas'
import NuevaObra from './NuevaObra'

export default function Resumen() {

  return (
    <Fragment>
      <h1>Datos de la obra</h1>
      <NuevaObra estado={true}/>
      <h1>Partidas</h1>
      <TablaPartidas estado={true}/>
    </Fragment>
  );
}