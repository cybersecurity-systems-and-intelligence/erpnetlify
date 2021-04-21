// se importan las librerias y hooks
import { useContext } from 'react';
import { createMuiTheme } from '@material-ui/core';
import MaterialTable from 'material-table';

// se importa los estilos
import { tableIcons } from '../../../../styles/bi/stylesBi'

// se importan los context
import registroObraContext from '../../../../context/controlObra/registroObra/registroObraContext'

const theme = createMuiTheme({
    palette: {
    secondary: {
        main: '#c5cae9',
        },
    },
})

const TablaPartidas = () => {

    // se extrae la informacion del context
    const registroObrasContext = useContext(registroObraContext)
    const { partidas } = registroObrasContext

    return (
        <MaterialTable
            style={{background: '#E3F2FD',  marginTop: theme.spacing(5), marginBottom: theme.spacing(5), border: "2px solid #ccc", borderRadius: 25,}}
            icons={tableIcons}
            title={<h3>PARTIDAS</h3>}
            options={{
                headerStyle: {
                    color: "#000",
                    border: "1px solid #ccc",
                    textAlign: 'center',
                    fontSize: 18
                }
            }}
            columns={[
                {   title: 'Partida',
                    field: 'partida',
                    defaultGroupOrder: 0,
                    cellStyle: {
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: '#000',
                        width:'100%',
                    },
                },
                {   title: 'Clave',
                    field: 'clave',
                    cellStyle: {
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: '#000',
                        width:'15%',
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 700,
                        border: "1px solid #ccc",
                    },
                },
                {   title: 'Descripcion',
                    field: 'descripcion',
                    type: 'text',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'100%',
                        textAlign: 'justify',
                        fontSize: 20,
                        border: "1px solid #ccc"
                    },
                },
                {   title: 'Unidad',
                    field: 'unidad',
                    type: 'numeric',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'9%',
                        textAlign: 'center',
                        fontSize: 20,
                        border: "1px solid #ccc"
                    },
                },
                {   title: 'Requeridos',
                    field: 'requeridos',
                    type: 'numeric',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'9%',
                        textAlign: 'center',
                        fontSize: 20,
                        border: "1px solid #ccc"
                    },
                },
            ]}
            data={partidas}
        />
    );
}

export default TablaPartidas;