import Link from 'next/link'

import { Icon } from '@iconify/react';
import roundNavigateNext from '@iconify/icons-ic/round-navigate-next';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import style from './styles'

export default function Header({params, data}){
  // let {map, agents} = props
  const classes = style()

  return(
    <>
      <div className={classes.headerNav}>
        <Typography variant="h4" className={classes.itemNav}>
          <div>
            {params.agent?`${(params.agent.charAt(0).toUpperCase()+params.agent.slice(1))}` : null}
            {params.map? ` / ${(params.map.charAt(0).toUpperCase()+params.map.slice(1))}` : null} 
          </div>
        </Typography>
      </div>

      <div className={classes.headerText}>
        <Typography variant="h5" style={{fontFamily: 'Circular Std'}}>
          Learn a variety of smokes, walls, dart etc 
        </Typography>
        <Typography variant="h5" style={{fontFamily: 'Circular Std'}}>
          Add your best ones to your favorites list
        </Typography>
        <Typography variant="h5" style={{fontFamily: 'Circular Std'}}>
          So become a high level player
        </Typography>
      </div>

      <div className={classes.headerFilter}>
        <Typography variant="h4" style={{textAlign: 'center', fontFamily: 'Circular Std', fontSize: '18px'}}>FILTER BY MAP</Typography>
        <Grid container className={classes.selectGrid}>
          <Grid item xs={'auto'} className={classes.selectGridGrid}>
            <Grid container justify="center" spacing={0}>
              {data.maps.map((mapa) => (
                <Link key={mapa.id} href="/[agent]/[map]" as={`/${params.agent.toLowerCase()}/${mapa.nome.toLowerCase()}`}>
                  <a>
                    <Box 
                      className={classes.item}
                      // component={Link} 
                      // to={{
                        // pathname: `${mapa.nome.toLowerCase()}`,
                        // paramtest: 'yes?'
                      // }}
                      key={mapa.id}
                    >
                      <div style={{backgroundImage: `url(http://cdn.valspotstest.ga/images/mapa/${mapa.img})`}} className={classes.bkimg}>

                      </div>
                      <div className={classes.content}>
                        <div className={classes.itemNome}>
                          <Typography variant="body2" className={classes.nome}>{mapa.nome}</Typography>
                        </div>
                        {/* <div className={classes.itemIconeNavigate}>
                          <Icon icon={roundNavigateNext} width="30px" />
                        </div> */}
                      </div>
                    </Box>
                  </a>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      
      {/* <div className={classes.famoso}>
        teste
      </div> */}
    </>
  )
}

// {data.maps.map((personagem) => (
//   <Link key={personagem.id} href="/[map]/[agent]" as={`/${params.map}/${personagem.nome.toLowerCase()}`}>
//     <a>
//       <Grid 
//         item 
//         className={classes.selectGridItem} 
//       >
//         <div>
//           <img className={classes.selectImage} src={`http://cdn.valspotstest.ga/images/agents/icone/${personagem.icone}`}/>
//         </div>
//         {/* <span className={classes.selectNames}>{personagem.nome}</span> */}
//       </Grid>
//     </a>
//   </Link>
// ))}