import Head from 'next/head'
import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import RelatedPost from '../../components/RelatedPost';
const Blogpost = (props) => {
  const { item, relatedPosts } = props;
  return (
    <>
      <Head>
        <title>{item.shortTitle}</title>
      </Head>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <article>
              <header className="mb-4">
                <h1 className="fw-bolder mb-1">{item.shortTitle}</h1>
                <div className="text-muted fst-italic mb-2">
                  Posted on {item.date} by {item.author}
                </div>
                <a className="badge bg-secondary text-decoration-none link-light" href="#!">{item.tags[0]}</a>
              </header>
              <div className="mb-4">
                <img className="img-fluid rounded" src="${json.items[i].img}" alt="" />
              </div>
              <section className="mb-5">
                <div dangerouslySetInnerHTML={{ __html: item.blogContent }}></div>
                <div className="socialContainer mt-5">
                  <div className="text-center socialLinks">
                    <a href={item.github} rel="noreferrer" target="_blank" className="github">
                      <i className="socialHover fab fa-github"></i>
                      <p>{item.firstName}'s GitHub</p>
                    </a>
                    <a href={item.linkedin} rel="noreferrer" target="_blank" className="linkedin">
                      <i className="socialHover fab fa-linkedin"></i>
                      <p>{item.firstName}'s Linkedin</p>
                    </a>
                  </div>
                </div>
              </section>
            </article>
          </div>
          <div className="col-lg-4">
            <div className="text-center fw-bolder mb-3">Related Posts
              <Link href="/">
                <i className="closeWindow fas fa-times"></i>
              </Link>
            </div>
            <div id="relatedPostContainer">
              {
                relatedPosts.map(relatedPost => {
                  let path = relatedPost.shortTitle.split(" ");
                  let finalPath = path.join("-")
                  return (
                    <RelatedPost title={relatedPost.shortTitle} key={relatedPost.id} link={finalPath} desc={relatedPost.shortDesc} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blogpost

export const getStaticPaths = async () => {
  let res = await fetch('https://hack-club-sigce-blogs.web.app/js/json/content.json')
  let data = await res.json();
  let items = data.items
  let paths = items.map((item) => {
    let path = item.shortTitle.split(" ");
    let finalPath = path.join("-")
    return {
      params: {
        blogs: finalPath,
      },
    }
  });
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  let res = await fetch('https://hack-club-sigce-blogs.web.app/js/json/content.json')
  let data = await res.json();
  let item;
  let relatedPosts = [];
  for (let i = 0; i < data.items.length; i++) {
    let path = data.items[i].shortTitle.split(" ");
    let finalPath = path.join("-")
    if (context.params.blogs === finalPath) {
      item = data.items[i]
    }
  }
  for (let j = 0; j < data.items.length; j++) {
    if (data.items[j].category === item.category) {
      relatedPosts.push(data.items[j])
    }
  }
  relatedPosts = relatedPosts.slice(0, 7)
  return {
    props: {
      item,
      relatedPosts
    }
  }
}