import Head from 'next/head';
import Info from '../components/info';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TECH Hayven</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      

      <Info />
      
    </div>
  )
}
