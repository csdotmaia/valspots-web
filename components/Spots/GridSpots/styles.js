import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  containerContent:{
  },
  cardGrid:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardEnvolve:{
    justifyContent: 'space-between',
    [theme.breakpoints.down('1100')]: {
      justifyContent: 'space-evenly'
    }
  },
  cardGridItem:{
    textDecoration: 'none',
    minWidth: '320px',
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  cardRoot:{
    width: "320px",
    backgroundColor: 'rgb(250,250,250)',
    display: 'inline-block',
  },
  header:{
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    padding: theme.spacing(0.5),
  },
  headerInfo:{
    alignSelf: 'center',
    position: 'absolute',
    left: 0,
    padding: theme.spacing(0.25, 0.5, 0.25, 0.5),
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '2.5px',
    borderRightWidth: '0.5px',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    borderColor: 'rgb(230, 230, 230, 0.4)',
  },
  headerTexto:{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'relative',
    margin: 0
  },
  headerTitulo:{
    fontSize: '17px',
    lineHeight: '1.15'
  },
  headerSubTitulo:{
    fontSize: '14px',
    lineHeight: '1.15',
    color: 'rgb(32,32,32,0.68)'
  },
  headerImage:{
    maxWidth: '60px',
    maxHeight: '43px',
    display: 'flex',
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: theme.spacing(0.5)
  }, 
  content:{
    width: '320px', 
    height: '180px',
    margin: '0px',
    backgroundColor: 'rgb(255, 70, 85)',
    backgroundSize: 'cover'
    // pointerEvents: 'none'
  },
  teste:{
    pointerEvents: 'none'
  },
  contentImage:{
    maxWidth: "320px"
  },
  footer:{
    display: 'flex',
    alignItems: 'center',
    // textAlign: 'center',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  footerLeft:{
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start'
  },
  footerRight:{
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  side:{
    // fontSize: 
    marginRight: theme.spacing(1),
    backgroundColor: 'rgb(255, 70, 85)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '16px',
    borderColor: 'rgb(255, 100, 115)',
    padding: theme.spacing(0.15, 0.4),
    color: 'white',
    letterSpacing: '0.5px',
    textTransform: 'capitalize'
  },
  tooltip:{
    display: 'flex',
    alignSelf: 'center'
  }
}))