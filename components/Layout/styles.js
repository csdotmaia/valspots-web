import {makeStyles} from '@material-ui/core/styles';

const barWidth = 230+230
const margin1920 = 0.1

export default makeStyles(theme => ({
  container: {
    display:'flex'
  },
  layout: {
    flexGrow:1,
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: '100%',
    [theme.breakpoints.up('1500')]: {
      maxWidth: `calc(100% - ${barWidth}px)`,
    },
    [theme.breakpoints.up('1800')]: {
      maxWidth: `calc(100% - (${barWidth}px + ((100%*${margin1920})*2)px))`,
      marginLeft: `calc((100% * ${margin1920}))`,
    }
  },
  // [theme.breakpoints.between(1660, 2560)]:{
  //   minWidth: '1280px',
  //   maxWidth: '1280px',
  //   height: '720px',
  // },
  // //1440x900
  // [theme.breakpoints.between(1260, 1660)]:{
  //   minWidth: '853px',
  //   maxWidth: '853px',
  //   height: '480px',
  // },
  // //1024x768
  // [theme.breakpoints.between(960, 1260)]: {
  //   minWidth: '640px',
  //   maxWidth: '640px',
  //   height: '360px',
  // },
  // [theme.breakpoints.between(1660, 2560)]:{
  //   height: '720px',
  // },
  // //1440x900
  // [theme.breakpoints.between(1260, 1660)]:{
  //   height: '480px',
  // },
  // //1024x768
  // [theme.breakpoints.between(960, 1260)]: {
  //   height: '360px',
  // },
}))