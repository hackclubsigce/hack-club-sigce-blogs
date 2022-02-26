import Container from "../components/Container"

const page = ({ arr }) => {
  return (
    <div>
        <Container data={arr}/>
    </div>
  )
}

export default page

export const getStaticPaths = async () => {
    let res = await fetch('https://hack-club-sigce-blogs.web.app/js/json/content.json')
    let data = await res.json();
    let items = data.items
    let paths = items.map((item) => {
        return {
            params:{
                pages: item.page.toString(),
            },
        }
    });
    return{
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    let res = await fetch('https://hack-club-sigce-blogs.web.app/js/json/content.json')
    let data = await res.json();
    let arr = [];
    for (let i = 0; i < data.items.length; i++) {
        if(context.params.pages === data.items[i].page.toString()){
            arr.push(data.items[i])
        }
    }
    return{
        props:{
            arr
        }
    }
}