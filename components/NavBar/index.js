import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import style from './styles'

export default function NavBar(){

  // const theme = useTheme();
  const classes = style()

  // const [openDrawerResp, setOpenDrawerResp] = useState(false);

  return(
    <>
      <AppBar
        position="fixed"
        elevation = {0}
        // className={clsx(classes.appBar, {[classes.appBarShift]: openDrawerResp})}
        className={classes.appBar}
      >
        <Toolbar>
        {/* <div className={classes.left_div}>
            <Link
            to={'/'}>
              <Typography 
                variant="h6" 
                className={classes.title}
                >
                Trapp
              </Typography>
            </Link>
          </div> */}
          {/* <Link to={"/"} color="inherit" component={Typography} variant="h6" noWrap>
            ValSpots
            </Link> */}
          <Link href="/">
            <a>
              <Typography variant="h6" noWrap 
              color="inherit" >
                ValSpots
              </Typography>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}