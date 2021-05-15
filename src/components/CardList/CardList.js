import {useEffect, useState} from "react";
import MovieCard from "../MovieCard/MovieCard";

const CardList = () => {
    const [poster, setPoster] = useState();
    // useEffect(
    //     fetch("https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg")
    //         .then(setPoster)
    //     ,[])

    return (
        <div>
            <MovieCard />
        </div>
    )
}

export default CardList;