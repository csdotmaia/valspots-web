import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) =>({
  root:{
    padding: theme.spacing(1)
  },
  love:{
    display: 'flex',
    flexDirection: 'column',
  },
  coffee:{
    marginBottom: theme.spacing(1)
  },
  paypal:{
    marginBottom: theme.spacing(1)
  },
  button:{
    padding: '6px'
  },
  textAfterIcon:{
    fontSize: '18px',
    fontFamily: 'Circular Std',
    textTransform: 'none',
    marginLeft: theme.spacing(0.25),
    marginRight: theme.spacing(0.25),
  },
  sections:{
    fontSize: '16px'
  },
  socialIcons:{
    display: 'flex',
    height: '40px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'grey',
    // padding: theme.spacing(0.5,0,0.5,0),
    marginBottom: theme.spacing(1.5)
  },
  boxSocialIcon:{
    // borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'45px',
    height: '45px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '16px',
    borderColor: 'rgb(230, 230, 230)',
    backgroundColor: 'rgb(237, 237, 237)'
  },
  madeBy:{
    fontSize: '14px',
    display: 'block',
    textAlign: 'center',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  }
}))