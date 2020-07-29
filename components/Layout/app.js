import Head from "next/head";
import NavBar from '../NavBar'
import Drawer from '../DrawerC'

import style from './styles'

function LayoutApp ({
  children, 
  title = 'Valorant Spots',
  description = 'Valorant Spots is a website that stores the spots of all the Valorant agents and maps. You can master your agent on every map of Valorant. Get Radiant.', 
  data}) {
  const classes = style()
  return(
    <div className={classes.container}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index"/>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content="valorant agent sova omen raze reyna cypher viper pro advanced sage brimstone smoke trap camera spy cam arrow incendiary grenade slow orb wall molotov tips best improve radiant maps haven ascent bind split" />
      </Head>
      <NavBar/>
      <Drawer data={{agents: data.agents}} />
      <div className={classes.layout}>
        {children}
      </div>
    </div>
  )
}

export default LayoutApp

{/* max 55; agent = Brimstone(9) map = Ascent(6)
agent name + website name = 27 (55-27= >28<); 
agent name + map name + website name = 37 (55-37= >18<)*/}
{/* 
Bright Flashes, Stuns and AfterShocks - Valorant Spots
Bright Flashes and Stuns on Ascent - Valorant Spots
Cypher Traps, SpyCams and Smokes - Valorant Spots
Cypher Traps, SpyCams Smokes on Ascent - Valorant Spots
Omen Smokes, Flashes and Teleports - Valorant Spots
Omen Smokes, Flashes and TP on Ascent - Valorant Spots
Raze Grenades - Valorant Spots
Raze Grenades on Ascent - Valorant Spots
Viper Walls, Smokes and Molotov - Valorant Spots
Viper Walls, Smokes, Molotov on Ascent - Valorant Spots
Jett Smokes - Valorant Spots
Jett Smokes on Ascent - Valorant Spots
Phoenix Molotovs, Walls and Flashes- Valorant Spots
Phoenix Molotovs and Walls on Ascent - Valorant Spots
Sova Arrows and Dart - Valorant Spots
Sova Arrows and Dart on Ascent - Valorant Spots
Brimstone Molotov and Smokes - Valorant Spots
Brimstone Molotov and Smokes on Ascent - Valorant Spots
Sage Orbs and Walls - Valorant Spots
Sage Orbs and Walls on Ascent - Valorant Spots
*/}