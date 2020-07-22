import React from 'react'

import { Button, Typography } from '@material-ui/core';
import { Icon, InlineIcon } from '@iconify/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import starIcon from '@iconify/icons-mdi/star'
import discordIcon from '@iconify/icons-mdi/discord'

import style from './styles'

export default function SecondList(props){
  const classes = style()
  return(
    <>
      {/*Favorites*/}
      <div className={classes.item}>
        <Button variant="contained" className={classes.firstGroupButton} disableElevation fullWidth>
          <div style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>              
            <Icon className={classes.icons} icon={starIcon} />
            <Typography className={classes.textAfterIcon} variant='body2'>
              Favorites
            </Typography>
          </div>
        </Button>
      </div>
      {/*Add spots*/}
      <div className={classes.item}>
        <Button variant="contained" className={classes.firstGroupButton} disableElevation color="primary" fullWidth>
        <div style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>    
          <Icon className={classes.icons} icon={discordIcon} />
          <Typography className={classes.textAfterIcon} variant='body2'>
            Add/Report Spot
          </Typography>
        </div>
        </Button>
        
      </div>
      {/*Parceiros*/}
      <div className={classes.item}>
        <div className={classes.section}>
          Our Partners
        </div>
      </div>
      {/*Comunicações*/}
      <div className={classes.item}>
        <div>

        </div>
      </div>
    </>
  )
}