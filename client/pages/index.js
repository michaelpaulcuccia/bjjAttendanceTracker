import Head from 'next/head';
import Container from '../layout/Container';
import HeroWithDrop from '../components/HeroWithDrop';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
    <Container>
      <HeroWithDrop />
    </Container>

    </>
  )
}
