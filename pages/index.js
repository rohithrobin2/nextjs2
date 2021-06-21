import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';



export default function Home() {
  return (
    <div >
      <Head>
      
        <title>Figma</title>
        
      </Head>

      
      {/*header */}
      <Header/>
      <Nav/>
    </div>
  )
}
