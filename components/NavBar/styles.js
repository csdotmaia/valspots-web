import {makeStyles} from '@material-ui/core/styles';

const drawerWidth = 220;

export default makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // flexShrink: 0,
    // transition: theme.transitions.create(['margin', 'width'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    display: 'flex',
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  hide: {
    display: 'none',
  },
  left_div:{
    width: 'calc(100% /3)',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  title: {
  },
  center_div:{
    width: 'calc(100% /3)',
    display: 'flex',
    justifyContent: 'center'
  },
  localizacao:{
    display:'none',
    [theme.breakpoints.up('sm')]: {
      display:'block',
      maxWidth: 'auto',
    },
  },
  right_div:{
    width: 'calc(100% /3)',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  login:{
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      maxWidth: 'auto',
    },
  },
  // login:{
  //   marginRight: theme.spacing(2),
  //   display: 'none',
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'flex'
  //   },
  // },
  
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   // marginLeft: 0,
  // },
  // contentShift: {
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   // marginLeft: +drawerWidth,
  // },


}));
