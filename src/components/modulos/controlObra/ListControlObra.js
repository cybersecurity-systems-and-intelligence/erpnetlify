import { useContext } from 'react';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core/';
import { BorderColorTwoTone, ListAlt, ContactMailOutlined } from '@material-ui/icons';

// se importan los context
import barraContext from '../../../context/barras/barraContext'
import registroObraContext from '../../../context/controlObra/registroObra/registroObraContext'

const ListControlObra = ( { } ) => {

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { cambiarMenu } = barrasContext

  // se extrae la informacion del context registroObra
  const registroObrasContext = useContext(registroObraContext)
  const { cambiarEstado } = registroObrasContext

  const registroObra = () => {
    cambiarMenu(0)
    cambiarEstado(false)
  }

  return (
    <List style={{background:'#202444',color:'#fff'}}>
    <div style={{background:'#202444'}}>
      <ListItem 
        button
        onClick={() => registroObra(0)}
      >
        <ListItemIcon  style={{color:'#fff'}}>
          <BorderColorTwoTone />
        </ListItemIcon>
        <ListItemText primary="Registrar obra" />
      </ListItem>
    </div>
    </List>
  )
}

export default ListControlObra
