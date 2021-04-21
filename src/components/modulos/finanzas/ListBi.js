// se importan las librerias
import { useContext } from 'react';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core/';
import { ContactMailOutlined } from '@material-ui/icons';

// se importan los context
import barraContext from '../../../context/barras/barraContext'

const ListBi = ( { } ) => {

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { cambiarMenu } = barrasContext


  return (
    <List style={{background:'#202444',color:'#fff'}}>
    <div style={{background:'#202444'}}>            
      <ListItem
        button
        onClick={() => cambiarMenu(0)}
      >
      <ListItemIcon style={{color:'#fff'}}>
          <ContactMailOutlined />
      </ListItemIcon>
      <ListItemText primary="Datos del cliente" />
      </ListItem>
    </div>
    </List>
  )
}

export default ListBi
