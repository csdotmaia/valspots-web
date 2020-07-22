import {useState} from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player'

import style from './styles'

import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import Fade from '@material-ui/core/Fade'

export default function GridSpots({params, data}){
  var dateTime = ""
  const classes = style()
  const [hover, setHover] = useState({})

  function handleHover(index, boo){
    setHover({...hover, [index]: boo})
    console.log(hover)
  }
  
  return(
    <>
      {data.spots?
        <div className={classes.containerContent}>
          {/* {console.log(props)} */}
          <Grid container className={classes.cardGrid}>
            <Grid item xs={'auto'}>
              <Grid container className={classes.cardEnvolve}>
                  {data.spots.map((spot) => (
                    dateTime = new Date(spot.updatedAt),
                    (spot.personagem.nome.toLowerCase() === params.agent &&
                      (params.map? 
                        spot.mapa.nome.toLowerCase() === params.map 
                        : 
                        true
                      )
                    ) 
                    &&(
                      <Link key={spot.id} 
                        href="/[agent]/[map]/[spot]" as={`/${spot.personagem.nome.toLowerCase()}/${spot.mapa.nome.toLowerCase()}/${spot.url}`}
                       >
                        <a>
                          <Grid
                            item
                            className={classes.cardGridItem}
                          >
                            <Card className={classes.cardRoot} >
                              <div className={classes.header}>
                                <div className={classes.headerInfo}>
                                {!params.map && (
                                  <Typography style={{lineHeight: 1}}>
                                    {spot.mapa.nome}
                                  </Typography>
                                )}
                                {!params.agent && (
                                  <Typography style={{lineHeight: 1}}>
                                    {spot.personagem.nome}
                                  </Typography>
                                )}
                                </div>
                                <div className={classes.headerTexto}>
                                  <Typography className={classes.headerTitulo} variant ="body2">{spot.nome}</Typography>
                                  <Typography color="inherit" className={classes.headerSubTitulo} variant ="subtitle2">{spot.nome_sub}</Typography>
                                </div>
                                {spot.personagem.habilidades.map((habilidade)=>(
                                  habilidade.teclado === spot.teclado && (
                              
                                // <IconeLogo
                                //   className={classes.headerImage}
                                // />
                                // <ReactSVG
                                  // key={habilidade.id}
                                  // className={classes.headerImage} 
                                  // src='../../assets/abilities/svg/recon-bolt.svg'
                                // />
                                    <img 
                                      key={habilidade.id}
                                      className={classes.headerImage} 
                                      style={{fill: '#fff'}}
                                      src={`http://cdn.valspotstest.ga/images/agents/habilidade/svg/${habilidade.icone}.svg`}
                                    />
                                  )
                                ))}
                              </div>
                              <div 
                                style={{backgroundImage: `url(http://cdn.valspotstest.ga/images/spot/thumb/${spot.thumb}.jpg)`}}
                                className={classes.content}
                                onMouseOver={() => handleHover(spot.url, true)}
                                onMouseOut={() => handleHover(spot.url, false)}
                              >
                                {hover[spot.url] === true && (
                                  <ReactPlayer
                                    className={classes.teste}
                                    url={spot.video}
                                    // light={!hover[spot.url]}
                                    // playIcon={true}
                                    pip={false}
                                    config={{
                                      youtube: { 
                                        playerVars: { 
                                          rel: 0,
                                          disablekb: 1,
                                        } 
                                      }
                                    }}
                                    width='320px'
                                    height='180px'
                                    playing={hover[spot.url]}
                                    loop
                                    volume={0}
                                    muted
                                    controls={false}
                                  />
                                )}
                              </div>
                              <div className={classes.footer}>
                                <div className={classes.footerLeft}>
                                  
                                </div>
                                <div className={classes.footerRight}>
                                  {spot.side === 'defender'&& (
                                    <div className={classes.side}>
                                      {spot.side}
                                    </div>
                                  )}
                                  <div className={classes.tooltip}>
                                    <Tooltip 
                                      interactive
                                      TransitionComponent={Fade} 
                                      TransitionProps={{ timeout: 250 }} 
                                      leaveDelay={200}
                                      disableTouchListener
                                      title={
                                        "Uploaded at: " +
                                        dateTime.getDate() + '/' + dateTime.getMonth() + '/' + dateTime.getFullYear()
                                      } 
                                    >
                                      <InfoIcon/>
                                    </Tooltip>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </Grid>
                        </a>
                      </Link>
                    )
                  ))}
                </Grid>
              </Grid>
            </Grid>
        </div>
      :
        <h2>Carregando</h2>
      }
    </>
  )
}