import Link from "next/link"

const BlogsCard = (props) => {
  const { data } = props
  let path = data.shortTitle.split(" ");
  let finalPath = `/blogs/${path.join("-")}`
  finalPath = finalPath.toString();
  return (
    <>
    <Link href={finalPath}>
    <li className="blogPost">
        <div className="blogTextContent">
          <div className="titleTags" >
            <a className="blogTitle">{data.shortTitle}</a>
          </div>
          <div className="blogDesc">{data.shortDesc}</div>
        </div>
        <div className="readMoreBtn">
          <button className="readMore">Read</button>
        </div>
      </li>
    </Link>
    </>
  )
}

export default BlogsCard