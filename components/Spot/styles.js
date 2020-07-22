import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    // margin: '20px',
    // padding: '20px',
    // padding: theme.spacing(2, 4, 3),
  notModal:{
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  },
  container:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflowY: 'overlay',
    boxShadow: theme.shadows[5],
    display: 'flex',
    padding: theme.spacing(8,0,0,0)
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  item:{
    alignItems: 'flex-start',
    height: '100%',
    // border: '2px solid #ccc',
    margin: theme.spacing(0,1),
    // backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    // flex: 1
  },
  leftItem:{
    flex:1,
    display: 'flex',
    justifyContent:'center'
  },
  centerItem:{
    flex:4,
    //1920x1080
    [theme.breakpoints.between(1900, 2560)]:{
      minWidth: '1280px',
      maxWidth: '1280px',
      height: '720px',
    },
    //1680x1050
    [theme.breakpoints.between(1660, 1900)]:{
      minWidth: '853px',
      maxWidth: '853px',
      height: '480px',
      // minWidth: '1280px',
      // maxWidth: '1280px',
      // height: '720px',
    },
    //1440x900
    [theme.breakpoints.between(1260, 1660)]:{
      minWidth: '853px',
      maxWidth: '853px',
      height: '480px',
    },
    //1024x768
    [theme.breakpoints.between(960, 1260)]: {
      minWidth: '640px',
      maxWidth: '640px',
      height: '360px',
    }
  },
  rightItem:{
    flex:1,
    display: 'flex',
    justifyContent:'center'
  },

  cardRoot:{
    width: "100%",
    backgroundColor: 'rgb(250,250,250)',
    display: 'inline-block',
  },
  header:{
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    padding: theme.spacing(0.5),
  },
  headerBack:{
    height: '43px',
    left: 0,
    // bottom: 0,
    position: 'absolute',
    alignSelf: 'center'
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
  content:{
    //RESOLUTION 360P 480P 720P
    //1920x1080
    [theme.breakpoints.between(1900, 2560)]:{
      height: '720px',
    },
    //1650X1050
    [theme.breakpoints.between(1660, 1900)]:{
      height: '480px',
      // height: '720px',
    },
    //1440x900
    [theme.breakpoints.between(1260, 1660)]:{
      height: '480px',
    },
    //1024x768
    [theme.breakpoints.between(960, 1260)]: {
      height: '360px',
    },

    margin: '0px',
    backgroundColor: 'rgb(255, 70, 85)'
    // pointerEvents: 'none'
  },
  teste:{
    // width: '100%',
    // height: '100%'
    // width: '100%'
    // pointerEvents: 'none'
  },
  footer:{
    display: 'flex',
    textAlign: 'center',
    // marginLeft: theme.spacing(1),
    margin: theme.spacing(1),
    // marginRight: theme.spacing(1)
  },
  footerLeft:{
    flex: 1,
    display: 'flex',
    marginRight: theme.spacing(1)
  },
  descricao:{
    width: '100%',
    backgroundColor: 'rgb(230,230,230)',
    borderTopRightRadius: '16px',
    borderTopLeftRadius: '16px',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  descricaoTitulo:{
    // color: 'rgb(150,150,150)'
    opacity: 0.6
  },
  descricaoConteudo:{
    paddingLeft: theme.spacing(1)
  },
  footerRight:{
    flex: 1,
    display: 'flex',
    maxWidth: '150px',
    minWidth: '150px',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  aboutAgent:{
    display: 'flex',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    backgroundColor: 'rgb(255, 70, 85)',
    height: '75px',
    // alignItems: 'center',
    alignItems: 'baseline'
  },
  agentImage:{
    width: '100%'
  },
  abilityImage:{
    width: '100%'
  },
  aboutMap:{
    width: '150px',
    // maxHeight: '75px',
    // position: 'center'
    height: '50px',
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center'
  },
  bkimg:{
    opacity: '80%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    width: '150px',
    zIndex: 1,
    display: 'block',
    height: '50px',
  },
  aboutSide:{
    alignSelf: 'center',
    zIndex: 9999,
  },
  sideDefender:{
    backgroundColor: 'rgb(255, 70, 85)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '16px',
    borderColor: 'rgb(255, 100, 115)',
    padding: theme.spacing(0.5, 1),
    color: 'white',
    letterSpacing: '1px',
    textTransform: 'capitalize'
  }
  // sideDefender:{
  //   backgroundColor: theme.palette.primary.main,
  //   borderWidth: '1px',
  //   borderStyle: 'solid',
  //   borderRadius: '16px',
  //   borderColor: theme.palette.primary.light,
  //   padding: theme.spacing(0.5, 1),
  //   color: 'white',
  //   letterSpacing: '1px',
  //   textTransform: 'capitalize'
  // }
}))