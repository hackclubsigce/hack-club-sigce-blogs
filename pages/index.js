import Head from 'next/head'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export async function getServerSideProps() {
  let res = await fetch('https://hack-club-sigce-blogs.web.app/js/json/content.json')
  let data = await res.json();
  let finalData = [];
  for (let i = 0; i < data.items.length; i++) {
    finalData.push(data.items[i])
    // console.log(data.items[i].id)
  }
  return{
    props: {
      data
    }
  }
}

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Hack Club SIGCE Blogs</title>
      </Head>
      <Navbar/>
      <Container data={data.items}/>
      <Footer/>
    </>
  )
}