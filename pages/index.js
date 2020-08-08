import Head from 'next/head'
import Projects from '../components/projects'
import Query from '../components/query'
import PROJECT_QUERY from '../apollo/queries/project/projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TECH Hayven</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Query query={PROJECT_QUERY}> 
        {({ data: { projects } }) => { 
          return <Projects projects={projects} />; 
        }}
      </Query>
    </div>
  )
}
