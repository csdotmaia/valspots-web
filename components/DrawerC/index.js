import FirstList from './FirstList'
import SecondList from './SecondList'
import LastList from './LastList'

import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import style from './styles'

export default function DrawerC({data}){

  const classes = style()

  return(
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <FirstList data={{agents: data.agents}} />
        {/* <Divider /> */}
        <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <SecondList/>
        </div>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
            {/* <LastList/> */}
        </div>
      </div>
    </Drawer>
  )}