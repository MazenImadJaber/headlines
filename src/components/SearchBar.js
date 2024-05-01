export default function SearchBar(props) {
return(<div>
    <input
    aria-labelledby="search-button"
    name="search"
    id="search"
    type="search"
    />
    <button
    id="search-button"
    type="button">
        Search
    </button>
</div>)
}