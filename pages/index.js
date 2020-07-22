import api from '../services/api'

import Layout from '../components/Layout/app'
import Header from '../components/Main/Header'

export default function Home({data}) {
  return (
    <Layout data={{agents: data.agents}} >
      <Header/>
    </Layout>
  )
}

export async function getStaticProps({params}) {
  var agents = await api.get('/personagem/all', {headers: {token: 'userAgentToken'} })
  // var maps = await response.data
  // By returning { props: maps }, the Maps component

  // will receive `maps` as a prop at build time
  return {
    props: {
      data: {
        agents: agents.data
      },
    },
  }
}