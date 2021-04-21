import { makeStyles } from '@material-ui/core';

export const styleLogin = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    hr:{
        background: '#b3d233',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        borderColor:'#d4e157',
        height:'5px',
        borderRadius: '5px',
        marginTop:'1px',
    },
    letra:{
        font: 'caption',
        marginTop:'20px',
        fontWeight:'700',
        fontSize: 25,
        color:'#545658'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        argin: theme.spacing(3, 0, 2),
        background: 'linear-gradient(#d4e157, #b3d233)',
        color:'#424242',
        marginBottom:'20px',
        marginTop:'10px',

        '&:hover': {
            color:'#000',
            fontWeight: '700',
        },
    },
}));

export const styleModulos = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
},

    title:{
        color:'#fff',
        fontSize:'27px',
        fontWeight:'700',
        textShadow:'black 0.1em 0.1em 0.2em',
        marginTop:'15px',
},

    icon:{
        color:'#1b1b1b',
        padding: '20px',
},

    iconSize:{
        fontSize: 55
},
    navUser: {
        textAlign: 'lefth',
},

    navLogo:{
        textAlign: 'center',
},

    navExit: {
        textAlign: 'right',
},

    nav: {
        background: '#f5f5f5',
        width: '100%',
        boxShadow:'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'
    },

    hr:{
        background: '#b3d233',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        borderColor:'#d4e157',
        height:'5px',
        borderRadius: '5px',
        marginTop:'1px',
    }, 
    letra:{
        font: 'caption',
        marginTop:'-20px',
        fontWeight:'700',
        fontSize: 25,
        color:'#545658'
    },

    card: {
      borderRadius:'35px',
      height: '100%',
      margin: '0 40px auto',
      boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -200px, rgba(0, 0, 0, 0.3) 0px 30px 30px -15px, rgba(10, 37, 64, 0.35) 0px -2px 30px 0px inset;',
      transition: 'transform .2s',
  
      '&:hover': {
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.enteringScreen,
        }),
        transform: 'scale(1.1)'     
     },  
    },

    close:{
        color:'black',
        fontSize: 35, 
        cursor:'pointer', 
        marginTop: '9px',
        marginRight:'10px',
        borderColor:'black',

        '&:hover':{
            color:'red'
           
        }
    },
}));

