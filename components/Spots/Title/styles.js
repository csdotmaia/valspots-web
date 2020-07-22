import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  titulo:{
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    backgroundColor: 'rgb(250,250,250)',
    display: 'flex',
    alignItems: 'center'
  },
  iconNew:{
    color: theme.palette.success.main,
    fontSize: '24px',
    marginRight: theme.spacing(0.5)
  },
  tituloText:{
  },
}))