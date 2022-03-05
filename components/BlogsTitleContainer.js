import BlogsCard from './BlogsCard'

const BlogsTitleContainer = (props) => {
  const { items } = props;
  let arr = [];
  for (let i = items.length - 1; i >= 0; i--) {
    arr.push(items[i])
  }
  return (
    <div className='mt-3 w-75 m-auto'>
      {arr.map((item) => {
        return (
          <BlogsCard key={item.id} data={item} />
        )
      })}
    </div>
  )
}

export default BlogsTitleContainer