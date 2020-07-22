import {makeStyles} from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles(theme => ({
  titleBox:{
    marginTop: theme.spacing(0.5),
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  title:{
    fontSize: '16px',
    // opacity: 0.75,
    display: 'inline',
    padding: theme.spacing(0, 1),
    fontFamily: 'Circular Std',
    color: 'white',
    backgroundColor: 'rgb(255, 70, 85)',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'rgb(255, 70, 85)',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    // marginBlockStart: '0px',
    // marginBlockEnd: '0px',
    verticalAlign: 'top',
    lineHeight: '1',
    zIndex:999,
  },
  selectGrid:{
    display: 'flex',
    justifyContent:'center',
  },
  selectGridGrid:{
    width: 'auto',
    marginTop: '-2px',
    zIndex:1,
    borderStyle: 'solid',
    borderTopWidth: '2px',
    borderBottomWidth: '1px',
    borderWidth: '0px',
    borderColor: 'rgb(255, 70, 85, 0.2)',
    borderRadius: '16px', 
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    backgroundColor: 'rgb(250,250,250)',
    // borderWidth: '1px', 
    // borderStyle: 'solid', 
    // borderColor: 'rgb(255, 70, 85, 0.2)',
    padding: '8px'
  },
  selectGridItem:{
    display: 'flex',
    flexDirection: 'column',
    minWidth: '50px',
    minHeight: '50px',
    maxHeight: '50px',
    maxWidth: '50px',
    borderRadius: '4px',
    '&:hover':{
      backgroundColor: 'rgb(255, 70, 85, 0.9)'
    }
    // backgroundColor: theme.palette.primary.dark
  },
  selectImage:{
    borderRadius: '4px',
    // width: '50px',
    // height: '50px',
    // minWidth: '50px',
    // minHeight: '50px',
    maxWidth: '50px',
    maxHeight: '50px',
    // borderRadius: '4px',
  },

  selectNames:{
    textAlign: 'center',
    backgroundColor: fade(theme.palette.primary.contrastText, 0.5),
    marginTop: theme.spacing(-2.5)
  },
  // item:{
  //   height: '50px',
  //   display: 'flex',
  //   textDecoration: 'none',
  //   '&:hover':{
  //     '& $nome':{
  //       opacity: 0.98
  //     },
  //     '& $itemIconeNavigate':{
  //       opacity: 1
  //     },
  //     '& $bkimg':{
  //       filter: 'none'
  //     },
  //   }
  // },
  // bkimg:{
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   zIndex: 1,
  //   display: 'block',
  //   width: '230px',
  //   height: '50px',
  //   // -webkit-filter: blur(5px);
  //   // -moz-filter: blur(5px);
  //   // -o-filter: blur(5px);
  //   // -ms-filter: blur(5px);
  //   filter: 'grayscale(50%)'
  // },
  // content:{
  //   width: '100%',
  //   height: '100%',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   // position: 'absolute',
    
  //   zIndex: 9999,
  //   // margin-left: 20px;
  //   // margin-right: 20px;
  // },
  // itemNome:{
  //   flex: 1,
  // },
  // itemIconeNavigate:{
  //   flex: 1, 
  //   opacity: 0.7,
  //   textAlign: 'end', 
  //   alignSelf: 'center',
  //   color: 'rgb(255, 70, 85)'
  // },
  elements:{
    // backgroundColor: 'black'
  }
}))