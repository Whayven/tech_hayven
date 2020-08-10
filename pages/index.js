import Head from 'next/head';
import Info from '../components/info';
import INFO_QUERY from '../apollo/queries/info/info';
import { initializeApollo } from '../utils/apollo';

export default function Home() {
  return (
    <div className="h-100">
      <Head>
        <title>TECH Hayven</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      

      <Info className="flex-shrink-0" />
      
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: INFO_QUERY
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}
