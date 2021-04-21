import { useContext } from 'react';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core/';
import { ListAlt, ContactMailOutlined } from '@material-ui/icons';

// se importan los context
import barraContext from '../../../context/barras/barraContext'

const ListContabilidad = ( { } ) => {

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { cambiarMenu } = barrasContext

  return (
    <List style={{background:'#202444',color:'#fff'}}>
    <div style={{background:'#202444'}}>      
      <ListItem
        button
        onClick={() => { cambiarMenu(0) }}
      >
      <ListItemIcon style={{color:'#fff'}}>
          <ListAlt />
      </ListItemIcon>
      <ListItemText primary="Cargar Facturas" />
      </ListItem>
    </div>
    </List>
  )
}

export default ListContabilidad
