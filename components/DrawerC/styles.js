import {makeStyles} from '@material-ui/core/styles';

const drawerWidth = 231;

export default makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    display: 'flex',
    // height: '1080px'
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  drawerPaper: {
    width: drawerWidth,
    // border: 0
  },

  drawerContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column'
    // overflow: 'auto',
  },
}))