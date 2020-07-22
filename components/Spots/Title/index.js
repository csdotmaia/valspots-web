import React from 'react'

import style from './styles'

import New from '@material-ui/icons/FiberNewRounded'
import Typography from '@material-ui/core/Typography'


export default function Title(){

  const classes = style()

  return(
    <div className={classes.titulo}>
      <New className={classes.iconNew}/>
      <Typography className={classes.tituloText} variant="h6">Newest Spots</Typography>
    </div>
  )
}