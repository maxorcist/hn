import CardList from "../CardList/CardList";
import {getStorage} from "../../utils/localStorage";
import {useEffect, useState} from "react";

const Fave = () => {
    const [favorites, setFavorites] = useState();
    const [onChange, setOnChange] = useState(null);

    useEffect(() => {
        setFavorites(Object.values(getStorage()))
    }, [onChange])

    return (
        <div className="Fave">
            {favorites?.length ?
                <CardList items={favorites} onChange={setOnChange} />
                :
                <h2>You have no saved favorites</h2>
            }
        </div>
    )
}

export default Fave;