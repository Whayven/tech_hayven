import Head from 'next/head';
import Info from '../components/info';

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
