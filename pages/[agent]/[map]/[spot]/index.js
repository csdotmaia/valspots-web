import Layout from '../../../../components/Layout/app'
import DrawerC from '../../../../components/DrawerC'
import SpotC from '../../../../components/Spot'

import api from "../../../../services/api"

function Spot({params, data}) {
  return(
    <Layout
      title={`${data.spot.personagem.nome} ${data.spot.nome} ${data.spot.nome_sub} on ${data.spot.mapa.nome} - Valorant Spots`}
      data={{agents: data.agents}}
    >
      <SpotC data={{spot: data.spot}}/>
    </Layout>
  )
}

export default Spot

export async function getStaticPaths(){
  const {data} = await api.get('/spots/all', {headers: {token: 'userAgentToken'}})

  const paths = data.map((spot) => ({
    params:{
      map: spot.mapa.nome.toLowerCase(),
      agent: spot.personagem.nome.toLowerCase(),
      spot: spot.url
    }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}){
  var agents = await api.get('/personagem/all', {headers: {token: 'userAgentToken'} })
  var spot = await api.get(`/spots/${params.spot}`, {headers: {token: 'userAgentToken'} })

  return{
    props:{
      params:{
      },
      data:{
        agents: agents.data,
        spot: spot.data
      }
    }
  }
}