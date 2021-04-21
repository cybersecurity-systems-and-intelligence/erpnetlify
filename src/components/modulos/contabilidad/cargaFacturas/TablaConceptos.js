// se importan las librerias y hooks
import { useContext } from 'react';
import MaterialTable from 'material-table';

// se importan los estilos
import { tableIcons } from '../../../../styles/bi/stylesBi'

// se importan los context
import cargaFacturaContext from '../../../../context/contabilidad/cargaFacturas/cargaFacturaContext'

export default function TablaConceptos() {

    // Extraer los valores del context de la factura
    const cargaFacturasContext = useContext(cargaFacturaContext)
    const { informacion } = cargaFacturasContext

    const { conceptos } = informacion


    return (
        <MaterialTable
            style={{background: '#E3F2FD',  marginTop:5, marginBottom:5, border: "2px solid #ccc", borderRadius: 25}}
            icons={tableIcons}
            title={<h3>CONCEPTOS</h3>}

            options={{
                headerStyle: {
                    backgroundColor: "#82b1ff",
                    color: "#FFF",
                    border: "1px solid #000",
                    textAlign: 'center',
                    fontSize: 18
                }
            }}

            columns={[
                {   title: 'Cantidad',
                    field: 'Cantidad',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'10%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 20
                    },
                },
                {   title: 'Clave Unidad',
                    field: 'ClaveUnidad',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'10%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 20,
                    },
                },
                {   title: 'Descripcion',
                    field: 'Descripcion',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'100%',
                        border: "1px solid #ccc",
                        fontSize: 11,
                        textAlign: 'justify'
                    },
                },
                {   title: 'Valor Unitario',
                    field: 'ValorUnitario',
                    type: 'numeric',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'10%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 15
                    },
                },
                {   title: 'Importe',
                    field: 'Importe',
                    type: 'numeric',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'10%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 15 },
                },
            ]}
            data={conceptos}
        />
    );
}