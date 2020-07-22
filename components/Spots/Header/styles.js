import {makeStyles} from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator';

const heightItem = '50px'
const widthItem = '130px'

export default makeStyles(theme => ({
  headerNav:{
    flex: 1,
    display: 'flex',
    width: 'auto',
    // backgroundColor: 'rgb(250,250,250)',
  },
  itemNav:{
    fontFamily: 'Circular Std', 
    padding: theme.spacing(0.5,1,0.5,1),
    fontSize: '16px',
    backgroundColor: 'rgb(250,250,250)',
    // borderBottomWidth: '1px',
    // borderBottomStyle: 'solid',
    // borderBottomColor: 'rgb(50,50,50)'
  },
  headerContent:{
  },
  headerText:{
    backgroundColor: 'rgb(250,250,250)',
    padding: theme.spacing(3,3,3,4),
    // paddingBottom: theme.spacing(2.5)
  },
  headerFilter:{
    marginTop: theme.spacing(2)
  },
  selectGrid:{
    display: 'flex',
    justifyContent:'center',
  },
  selectGridGrid:{
    backgroundColor: 'rgb(250,250,250)',
    // borderWidth: '1px', 
    // borderStyle: 'solid', 
    // borderColor: 'rgb(255, 70, 85, 0.2)',
    // borderRadius: '20px', 
    padding: '4px 14px 4px 14px'
  },
  item:{
    height: heightItem,
    display: 'flex',
    textDecoration: 'none',
    '&:hover':{
      // width: '150px',
      // marginLeft: '-10px',
      '& $nome':{
        opacity: 0.98
      },
      // '& $itemIconeNavigate':{
      //   opacity: 1
      // },
      '& $bkimg':{
        filter: 'none',
        width: '150px',
        marginLeft: '-10px',
        zIndex: 6666
      },
      '& $content':{
        zIndex: 9999
      },
    }
  },
  bkimg:{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    // left: 0,
    // right: 0,
    zIndex: 1,
    display: 'block',
    width: widthItem,
    height: heightItem,
    // -webkit-filter: blur(5px);
    // -moz-filter: blur(5px);
    // -o-filter: blur(5px);
    // -ms-filter: blur(5px);
    filter: 'grayscale(50%)'
  },
  content:{
    width: widthItem,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // position: 'absolute',
    
    zIndex: 999,
    // margin-left: 20px;
    // margin-right: 20px;
  },
  itemNome:{
    width: widthItem,
    textAlign: 'center'
    // flex: 1,
  },
  nome:{
    fontSize: '16px',
    opacity: 0.75,
    display: 'inline',
    padding: theme.spacing(0, 1),
    fontFamily: 'Circular Std',
    color: 'white',
    backgroundColor: 'rgb(255, 70, 85)',
    // borderStyle: 'solid',
    // borderWidth: '1px',
    // borderColor: 'rgb(255, 70, 85)',
    // borderTopLeftRadius: '4px',
    // borderTopRightRadius: '4px',
    borderBottomRightRadius: '8px',
    borderBottomLeftRadius: '8px',
    // marginBlockStart: '0px',
    // marginBlockEnd: '0px',
    verticalAlign: 'top',
    lineHeight: '1',
    // zIndex:666,
  },
  // itemIconeNavigate:{
  //   // flex: 1, 
  //   opacity: 0.7,
  //   textAlign: 'end', 
  //   alignSelf: 'center',
  //   color: 'rgb(255, 70, 85)'
  // },
  // selectGridItem:{
  //   display: 'flex',
  //   flexDirection: 'column',
  //   minWidth: '50px',
  //   minHeight: '50px',
  //   maxHeight: '50px',
  //   maxWidth: '50px',
  //   borderRadius: '8px',
  //   '&:hover':{
  //     backgroundColor: 'rgb(255, 70, 85, 0.9)'
  //   }
  //   // backgroundColor: theme.palette.primary.dark
  // },
  // selectImage:{
  //   maxWidth: '50px',
  //   maxHeight: '50px',
  //   borderRadius: '8px',
  // },
  // selectNames:{
  //   textAlign: 'center',
  //   backgroundColor: fade(theme.palette.primary.contrastText, 0.5),
  //   marginTop: theme.spacing(-2.5)
  // },
  famoso:{
    backgroundColor: 'rgb(250,250,250)',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1)
  }
  // selectGrid:{
  //   display: 'flex',
  //   justifyContent: 'center',
  //   flexDirection: 'column',
  // },
  // selectGridItem:{
  //   flexDirection: 'column',
  //   display: 'flex',
  //   maxWidth: '300px',
  //   maxHeight: '150px'
  // },
  // selectImage:{
  //   maxWidth: '200px',
  //   maxHeight: '200px'
  // }
}))