import "./Search.css";
import {useState} from "react";
import CardList from "../CardList/CardList";
import {getSearch} from "../../utils/httpGet";

const Search = () => {
    const [input, setInput] = useState("");
    const [searchResult, setSearchResult] = useState();
    const [error, setError] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (input) {
            getSearch(input).then(setSearchResult).catch(setError)
        }
    }
    return (
        <div>
            <form className="Search__Form" onSubmit={handleSubmit}>
                <label className="Search__Label">
                    Search
                    <input
                        className="Search__Input"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </label>
                <button
                    className="Search__Submit"
                    type="submit">Go!</button>
            </form>
            {searchResult &&
                <CardList items={searchResult.Search} />
            }
            {error && <p>{error} hej</p>}
        </div>
    )
};

export default Search;