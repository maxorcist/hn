import {useEffect, useState} from "react";
import {get, getSearch} from "../../utils/httpGet";
import {getDummyData} from "../../utils/dummyData";
import CardList from "../CardList/CardList";

const Search = () => {
    const [input, setInput] = useState("");
    const [searchResult, setSearchResult] = useState();
    const [error, setError] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (input) {
            // getSearch(input).then(setSearchResult).catch(setError)
            setSearchResult(getDummyData())
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </label>
                <button type="submit">go</button>
            </form>
            {searchResult &&
                <CardList items={searchResult.Search} />
            }
            {error && <p>{error} hej</p>}
        </div>
    )
};

export default Search;