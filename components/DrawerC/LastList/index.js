import React from 'react'

import { Button, Typography, Box } from '@material-ui/core';
import { Icon, InlineIcon } from '@iconify/react';

import paypalIcon from '@iconify/icons-mdi/paypal';
// import emoCoffee from '@iconify/icons-fontelico/emo-coffee'
import heartIcon from '@iconify/icons-mdi/heart'

import discordIcon from '@iconify/icons-mdi/discord';
import twitchIcon from '@iconify/icons-mdi/twitch';
import youtubeIcon from '@iconify/icons-mdi/youtube';
import twitterIcon from '@iconify/icons-mdi/twitter';

import style from './styles'

export default function LastList(){

  const classes = style()

  return(
    <div className={classes.root}>
      {/*The Heroes*/}
      <div>

      </div>
      {/* Coffee and Paypal */}
      <div className={classes.love}>
        <Typography className={`${classes.textAfterIcon} ${classes.sections}`} variant='body2'>
          Suport us
        </Typography>
        <div className={classes.coffee}>
          <Button className={classes.button} variant="contained" disableElevation color="primary" fullWidth>
            <Typography className={classes.textAfterIcon} variant='body2'>
              Buyme a coffee
            </Typography>
            {/* <Icon icon={emoCoffee} /> */}
          </Button>
        </div>
        <div className={classes.paypal}>
          <Button className={classes.button} variant="contained" disableElevation color="primary" fullWidth>
            <Icon icon={paypalIcon} />
            <Typography className={classes.textAfterIcon} variant='body2'>
              Paypal
            </Typography>
          </Button>
        </div>
      </div>

      {/*Redes Sociais*/}
      <div className={classes.sections}>
        <div className={classes.socialIcons}>
          {/* Discord */}
          <Box className={classes.boxSocialIcon}>
            <Icon icon={discordIcon} width="35" height="35"/>
          </Box>
          {/* Twitch */}
          <Box className={classes.boxSocialIcon}>
            <Icon icon={twitchIcon} width="35" height="35"/>
          </Box>
          {/* Youtube */}
          <Box className={classes.boxSocialIcon}>
            <Icon icon={youtubeIcon} width="35" height="35"/>
          </Box>
          {/* Twitter */}
          <Box className={classes.boxSocialIcon}>
            <Icon icon={twitterIcon} width="35" height="35"/>
          </Box>
        </div>
      </div>

      {/*Last*/}
      <div className={classes.madeBy}>
          Made with
          <Icon style={{marginLeft: '2px', marginRight: '2px', fontSize: '16px', color: 'red', verticalAlign:'text-bottom'}} icon={heartIcon} />
          by csxmaia
      </div>
    </div>
  )
}