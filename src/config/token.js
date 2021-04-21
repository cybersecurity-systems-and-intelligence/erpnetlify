import clienteAxios from './axios'

const tokenAuth = token => {
    if(token){
        clienteAxios.defaults.headers.common['Autorizado'] = token
        clienteAxios.defaults.headers.common['AutorizadoG'] = 'holamundo'
    } else {
        delete clienteAxios.defaults.headers.common['Autorizado']
    }
}

export default tokenAuth