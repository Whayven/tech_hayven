import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Head>
        <title>TECH Hayven</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={{ pathname: "projects" }}>
        <a>Projects</a>
      </Link>
      <br></br>
      <Link href={{ pathname: "posts" }}>
        <a>Blog</a>
      </Link>

      
    </div>
  )
}
