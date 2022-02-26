const SearchBar = () => {
  return (
    <div>
        <form className="d-flex container mt-3 w-75">
            <input className="form-control me-2 p-2" type="search" placeholder="Search Blogs..." aria-label="Search"/>
        </form>
    </div>
  )
}

export default SearchBar