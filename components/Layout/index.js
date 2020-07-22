import NavBar from '../NavBar'

import style from './styles'

function Layout (props) {
  const classes = style()
  return(
    <div className={classes.container}>
      <NavBar/>
      {props.children}
    </div>
  )
}

export default Layout