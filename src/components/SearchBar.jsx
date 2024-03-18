

function SearchBar({placeholder, data}) {
  return (
    <div className = "search">
        <div className = "searchInputs">
            <input type = "text" placeholder = {placeholder}/>
            <div classname = "searchIcon"></div>
        </div>
        <div className = "dataResult"></div>
      
    </div>
  )
}

export default SearchBar
