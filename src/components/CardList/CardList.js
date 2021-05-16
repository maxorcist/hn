import MovieCard from "../MovieCard/MovieCard";
import MovieDetail from "../MovieDetail/MovieDetail";
import {useState} from "react";

const CardList = ({items, onChange = ()=>{} }) => {
    const [movie, showMovieDetail] = useState();

    return (
        <div>
            {movie && <MovieDetail
                {...movie}
                handleClose={() => showMovieDetail(null)}
                onChange={onChange}
            />
            }
            {items?.length &&
            items.map((item, i) => (
                <MovieCard
                    {...item}
                    handleClick={() => showMovieDetail(item)}
                    key={i}
                />
            ))
            }
        </div>
    )
}

export default CardList;