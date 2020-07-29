import Layout from '../../../components/Layout/app'
import Header from '../../../components/Spots/Header'
import Title from '../../../components/Spots/Title'
import GridSpots from '../../../components/Spots/GridSpots'
import api from '../../../services/api'

function Agent({params, data}) {
  return(
    <Layout 
      title={`${data.agent.nome} ${data.agent.text_duo} on ${data.map.nome} - Valorant Spots`} 
      description={`Find ${data.agent.nome} ${data.agent.text_solo} Spots in ${data.map.nome} and improve your gameplay learning and practicing. Checkout our database of the best spots on valorant`}
      data={{agents: data.agents}}
    >
      <Header 
        params={{map: params.map, agent: params.agent}} 
        data={{maps: data.maps}}
        description={`${data.agent.text_solo} of ${data.agent.nome} on ${data.map.nome}`}
      />
      <Title/>
      <GridSpots params={{map: params.map, agent: params.agent}} data={{spots: data.spots}}/>
    </Layout>
  )
}

export default Agent

export async function getStaticPaths() {
  const agents = await api.get('/personagem/all', {headers: {token: 'userAgentToken'} })
  const maps = await api.get('/mapa/all', {headers: {token: 'userAgentToken'} })
  var count = 0
  var all = []
  var thepaths = maps.data.filter(function(map) {

    let oneMap = agents.data.map((agent) => ({
      params: {
        map: map.nome.toLowerCase(),
        agent: agent.nome.toLowerCase()
      }
    }))

    all = all.concat(oneMap)
    count = count + 1

    if(maps.data.length===count){
      return true
    }
    return false

  }).map(function(map){return all})

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: thepaths[0], fallback: false }
}

export async function getStaticProps({params}) {
  var agents = await api.get('/personagem/all', {headers: {token: 'userAgentToken'} })
  var agent = await api.get(`/personagem/${params.agent}`, {headers: {token: 'userAgentToken'} })
  var map = await api.get(`/mapa/${params.map}`, {headers: {token: 'userAgentToken'} })
  var maps = await api.get('/mapa/all', {headers: {token: 'userAgentToken'} })
  var spots = await api.get('/spots/all', {headers: {token: 'userAgentToken'} })
  // var {data} = await api.get('/personagem/all', {headers: {token: 'userAgentToken'} })
  // By returning { props: maps }, the Maps component
  // will receive `maps` as a prop at build time
  return {
    props: {
      params:{
        map: params.map,
        agent: params.agent
      },
      data:{
        agent: agent.data,
        agents: agents.data,
        map: map.data,
        maps: maps.data,
        spots: spots.data
      }
    },
  }
}