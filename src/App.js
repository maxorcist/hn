import './App.css';
import {useState} from "react";
import Search from "./components/Search/Search";
import Fave from "./components/Fave/Fave";

function App() {
    const [page, setPage] = useState("search");
    return (
        <div className="App">
            <header className="App__Header">
                <button
                    className="App__MenuButton"
                    onClick={() => setPage("search")}>
                    Search
                </button>
                <button
                    className="App__MenuButton"
                    onClick={() => setPage("fave")}>
                    Favorites
                </button>
            </header>
            {page === "search" &&
                <Search />
            }
            {page === "fave" &&
                <Fave />
            }
        </div>
    );
};

export default App;
