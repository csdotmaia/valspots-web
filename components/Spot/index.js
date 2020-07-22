import React from 'react'
import ReactPlayer from 'react-player'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import withWidth from '@material-ui/core/withWidth';

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import ModalComponent from '@material-ui/core/Modal';
import roundNavigateBefore from '@iconify/icons-ic/round-navigate-before';

import style from './styles'

function Spot ({params, data}) {
  const classes = style();
  
  return(
    <div className={classes.notModal}>
      <div className={`${classes.item} ${classes.centerItem}`}>
          <div style={{height: 'auto'}}>

            <Card className={classes.cardRoot}>
              <div className={classes.header}>
                <div className={classes.headerBack}>
                  <Link href='/[agent]/[map]' as={`/${data.spot.personagem.nome.toLowerCase()}/${data.spot.mapa.nome.toLowerCase()}`}>
                    <a>
                      <Icon icon={roundNavigateBefore} color="#333" width="43px" />
                    </a>
                  </Link>
                </div>
                <div className={classes.headerTexto}>
                  <Typography className={classes.headerTitulo} variant ="body2">{data.spot.nome}</Typography>
                  <Typography color="inherit" className={classes.headerSubTitulo} variant ="subtitle2">{data.spot.nome_sub}</Typography>
                </div>
              </div>
              <div 
                className={classes.content}
              >
                  <ReactPlayer
                    className={classes.teste}
                    url={data.spot.video}
                    // light={!hover[spot.url]}
                    // playIcon={true}
                    // pip={false}
                    config={{
                      youtube: { 
                        playerVars: { 
                          rel: 0,
                        } 
                      }
                    }}
                    width='100%'
                    height='100%'
                    playing={true}
                    controls={true}
                    loop
                    volume={0}
                    muted
                  />
              </div>
              <div className={classes.footer}>
                <div className={classes.footerLeft}>
                  <div className={classes.descricao}>
                  <Typography className={classes.descricaoTitulo}>Description: </Typography>
                  <Typography className={classes.descricaoConteudo}>{data.spot.descricao}</Typography>
                  </div>
                </div>
                <div className={classes.footerRight}>
                  {/* About Agent */}
                  <div className={classes.aboutAgent}>

                    {/* Personagem */}
                    <div style={{flex: 1}}>
                      <img className={classes.agentImage} src={`http://cdn.valspotstest.ga/images/agents/icone/${data.spot.personagem.icone}`}/>
                    </div>

                    {/* Habilidade */}
                    <div style={{flex: 1}}>
                      {data.spot.personagem.habilidades.map((habilidade)=>(
                        habilidade.teclado === data.spot.teclado && (
                          <img 
                            key={habilidade.id}
                            className={classes.abilityImage} 
                            style={{fill: '#fff'}}
                            src={`http://cdn.valspotstest.ga/images/agents/habilidade/svg/${habilidade.icone}.svg`}
                          />
                        )
                      ))}
                    </div>
                  </div>

                  {/* Mapa */}
                  <div className={classes.aboutMap}>
                    <div style={{backgroundImage: `url(http://cdn.valspotstest.ga/images/mapa/${data.spot.mapa.img})`}} className={classes.bkimg}>

                    </div>
                    <div className={classes.aboutSide}>
                      {data.spot.side === 'defender' && (
                        <div className={classes.sideDefender}>
                          {data.spot.side}
                        </div>
                      )}
                      {data.spot.side === 'attacker' && (
                        <div className={classes.sideAttacker}>
                          {data.spot.side}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* side */}

                  {/* <div>
                    <Tooltip 
                      interactive
                      TransitionComponent={Fade} 
                      TransitionProps={{ timeout: 250 }} 
                      leaveDelay={200}
                      disableTouchListener
                      title={spot.createdAt} 
                    >
                      <InfoIcon/>
                    </Tooltip>
                  </div> */}
                </div>
                </div>
            </Card> 
          </div>
        </div>
        </div>
  )
}

export default Spot

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

function Modal(props){

  const classes = style();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const [spot, setSpot] = React.useState(props.spot);

  const handleBack = (e) => {
    e.stopPropagation()
    navigate(-1)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <>
    {/* {spot? */}
    // <div className={classes.firstDivModal}>
    <div className={classes.container} onClick={(e) => handleBack(e)}>
      {/* for ad or close */}
        <div className={`${classes.item} ${classes.leftItem}`} >
          <div style={{height: 'auto', backgroundColor: 'red', position: 'fixed'}} onClick={(e) => e.stopPropagation()}>
            adTF
          </div>
        </div>

        {/* spot */}
        <div className={`${classes.item} ${classes.centerItem}`} onClick={(e) => e.stopPropagation()}>
          <div style={{height: 'auto'}}>

            <Card className={classes.cardRoot}>
              <div className={classes.header}>
                <div className={classes.headerTexto}>
                  <Typography className={classes.headerTitulo} variant ="body2">{props.spot.nome}</Typography>
                  <Typography color="inherit" className={classes.headerSubTitulo} variant ="subtitle2">{props.spot.nome_sub}</Typography>
                </div>
              </div>
              <div 
                className={classes.content}
              >
                  <ReactPlayer
                    className={classes.teste}
                    url={props.spot.video}
                    // light={!hover[spot.url]}
                    // playIcon={true}
                    // pip={false}
                    config={{
                      youtube: { 
                        playerVars: { 
                          rel: 0,
                        } 
                      }
                    }}
                    width='100%'
                    height='100%'
                    playing={true}
                    loop
                    volume={0}
                    muted
                  />
              </div>
              <div className={classes.footer}>
                <div className={classes.footerLeft}>
                  <div className={classes.descricao}>
                  <Typography className={classes.descricaoTitulo}>Description: </Typography>
                  <Typography className={classes.descricaoConteudo}>{props.spot.descricao}</Typography>
                  </div>
                </div>
                <div className={classes.footerRight}>
                  {/* About Agent */}
                  <div className={classes.aboutAgent}>

                    {/* Personagem */}
                    <div style={{flex: 1}}>
                      <img className={classes.agentImage} src={`http://cdn.valspotstest.ga/images/agents/icone/${spot.personagem.icone}`}/>
                    </div>

                    {/* Habilidade */}
                    <div style={{flex: 1}}>
                      {spot.personagem.habilidades.map((habilidade)=>(
                        habilidade.teclado === spot.teclado && (
                          <img 
                            key={habilidade.id}
                            className={classes.abilityImage} 
                            style={{fill: '#fff'}}
                            src={`http://cdn.valspotstest.ga/images/agents/habilidade/svg/${habilidade.icone}.svg`}
                          />
                        )
                      ))}
                    </div>
                  </div>

                  {/* Mapa */}
                  <div className={classes.aboutMap}>
                    <div style={{backgroundImage: `url(http://cdn.valspotstest.ga/images/mapa/${spot.mapa.img})`}} className={classes.bkimg}>

                    </div>
                    <div className={classes.aboutSide}>
                      {spot.side === 'defender' && (
                        <div className={classes.sideDefender}>
                          {spot.side}
                        </div>
                      )}
                      {spot.side === 'attacker' && (
                        <div className={classes.sideAttacker}>
                          {spot.side}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* side */}

                  {/* <div>
                    <Tooltip 
                      interactive
                      TransitionComponent={Fade} 
                      TransitionProps={{ timeout: 250 }} 
                      leaveDelay={200}
                      disableTouchListener
                      title={spot.createdAt} 
                    >
                      <InfoIcon/>
                    </Tooltip>
                  </div> */}
                </div>
              </div>
            </Card> 
          </div>
        </div>


        {/* for ad or close */}
        <div className={`${classes.item} ${classes.rightItem}`}>
          <div style={{height: 'auto', backgroundColor: 'red', position: 'fixed'}} onClick={(e) => e.stopPropagation()}>
            {`Current width: ${props.width}`}
          </div>
        </div>
      </div>
    // </div>
    {/* :
      <h2>Carregando</h2>
    } */}
    </>
  );

  {/* <h2 id="simple-modal-title">Text in a modal</h2>
  <p id="simple-modal-description">
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  </p> */}

  return(
    <>
      {props.isModal? 
      <>
      <ModalComponent
      open={open}
      onClose={() => handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      >
        {body}
      </ModalComponent>
      </>
      :
      <>
      {console.log("Spot compoennt")}
      </>
      }
    
    </>
  )
}

// export default withWidth()(Modal);