
function SearchBar(props) {
    return (
        <>
        <label >{props.text}</label>
        <input onChange={(e) => props.setInput(e.target.value)} type='search'></input>   
       
        </>
            )
}

export default SearchBar;