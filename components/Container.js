import Styles from '../styles/Container.module.css'
import BlogsTitleContainer from './BlogsTitleContainer';
import SearchBar from './SearchBar';
const Container = (props) => {
  const { data } = props;
  return (
    <>
      <div className={Styles.container}>
        <SearchBar />
        <BlogsTitleContainer items={data} />
      </div>
    </>
  )
}

export default Container;