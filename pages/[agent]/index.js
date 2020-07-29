// import { useRouter } from 'next/router'
import Layout from '../../components/Layout/app'
import Header from '../../components/Spots/Header'
import Title from '../../components/Spots/Title'
import GridSpots from '../../components/Spots/GridSpots'

import api from '../../services/api'

function Agent({params, data}) {
  // const router = useRouter()
  // const { map } = router.query
  return(
    <Layout 
      title={`${data.agent.nome} ${data.agent.text_solo} - Valorant Spots`} 
      description={`Find ${data.agent.nome} ${data.agent.text_solo} Spots and improve your gameplay learning and practicing. Checkout our database of the best spots on valorant`}
      data={{agents: data.agents}} 
    >
      <Header 
        params={{agent: params.agent}} 
        data={{maps: data.maps}}
        description={`${data.agent.text_solo} of ${data.agent.nome}`}
      />
      <Title/>
      <GridSpots params={{agent: params.agent}} data={{spots: data.spots}}/>
    </Layout>
  )
}
export default Agent
      
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const {data} = await api.get('/personagem/all', {headers: {token: 'userAgentToken'} })
  // const maps = await response.data
  // Get the paths we want to pre-render based on posts
  const paths = data.map((agent) => ({
    params: { agent: agent.nome.toLowerCase()}
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  var agents = await api.get('/personagem/all', {headers: {token: 'userAgentToken'} })
  var agent = await api.get(`/personagem/${params.agent}`, {headers: {token: 'userAgentToken'} })
  var maps = await api.get('/mapa/all', {headers: {token: 'userAgentToken'} })
  var spots = await api.get('/spots/all', {headers: {token: 'userAgentToken'} })
  // var maps = await response.data
  // By returning { props: maps }, the Maps component
  // will receive `maps` as a prop at build time
  return {
    props: {
      params:{
        agent: params.agent,
      },
      data:{
        agents: agents.data,
        agent: agent.data,
        spots: spots.data,
        maps: maps.data
      }
    },
  }
}


