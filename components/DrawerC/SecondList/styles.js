import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
  secondList:{
    // height: '100%',
    // width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
    // justifyContent: 'center',
    // alignitems: 'flex-end'
  },
  firstGroupButton:{
    backgroundColor: 'rgb(255, 70, 85)',
    color: 'white',
    borderRadius: '0',
    '&:hover':{
      backgroundColor: 'rgb(255, 60, 75)',
    }
  },
  item:{
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(-0.5),
  },
  section:{
    paddingLeft: theme.spacing(1)
  },
  icons:{
    fontSize: '20px',
    marginBottom: '2.5px'
  },
  textAfterIcon:{
    fontSize: '18px',
    fontFamily: 'Circular Std',
    textTransform: 'none',
    marginLeft: theme.spacing(0.25),
    marginRight: theme.spacing(0.25),
  },
}))