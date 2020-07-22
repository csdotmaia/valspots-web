import Link from 'next/link'



import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';

import style from './styles'


export default function Mapas({data}){

  const classes = style()

  // function CustomLink(to) { 
  //   React.useMemo(() =>
  //     React.forwardRef((linkProps, ref) => (
  //       <Link ref={ref} to={to} {...linkProps} />
  //     )),
  //   [to],
  // )}

  return(
    <>
      <div className={classes.titleBox}>
        <Typography variant="body2" className={classes.title}>Select a Agent</Typography>
      </div>
      <Grid container className={classes.selectGrid}>
      <Grid item xs={'auto'} className={classes.selectGridGrid}>
        <Grid container justify="center" spacing={0}>
          {data.agents.map((personagem) => (
            <Link key={personagem.id} href="/[agent]" as={`/${personagem.nome.toLowerCase()}`} >
              <a>
                <Grid 
                  item 
                  className={classes.selectGridItem} 
                >
                  <div>
                    <img className={classes.selectImage} src={`http://cdn.valspotstest.ga/images/agents/icone/${personagem.icone}`}/>
                  </div>
                  {/* <span className={classes.selectNames}>{personagem.nome}</span> */}
                </Grid>
              </a>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}

      // <div className={classes.teste} style={{display: 'flex', flexDirection: 'column'}} >
      //   {/* Pick a map */}
      //   {data.maps.map((mapa) => (
      //     <Link key={mapa.id} href="/[map]" as={`/${mapa.nome.toLowerCase()}`}>
      //       <a>
      //         <Box 
      //           className={classes.item}
      //           // component={Link} 
      //           // to={{
      //             // pathname: `${mapa.nome.toLowerCase()}`,
      //             // paramtest: 'yes?'
      //           // }}
      //           key={mapa.id}
      //         >
      //           <div style={{backgroundImage: `url(http://cdn.valspotstest.ga/images/mapa/${mapa.img})`}} className={classes.bkimg}>

      //           </div>
      //           <div className={classes.content}>
      //             <div className={classes.itemNome}>
      //               <Typography variant="body2" className={classes.nome}>{mapa.nome}</Typography>
      //             </div>
      //             <div className={classes.itemIconeNavigate}>
      //               <Icon icon={roundNavigateNext} width="30px" />
      //             </div>
      //           </div>
      //         </Box>
      //       </a>
      //     </Link>
      //   ))}
      // </div>