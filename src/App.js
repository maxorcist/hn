import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Search from "./components/Search/Search";
import Fave from "./components/Fave/Fave";

function App() {
    const [page, setPage] = useState("search");
    return (
        <div className="App">
            <header className="App__Header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <button onClick={() => setPage("search")}>Search</button>
                <button onClick={() => setPage("fave")}>Fave List</button>
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
