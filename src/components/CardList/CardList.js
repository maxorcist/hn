import MovieCard from "../MovieCard/MovieCard";
import MovieDetail from "../MovieDetail/MovieDetail";

const CardList = ({ items }) => {

    return (
        <div>
            <MovieDetail {...items[0]} />
            {items?.length &&
                items.map((item, i) => (
                   <MovieCard {...item} key={i} />
                ))
            }
        </div>
    )
}

export default CardList;