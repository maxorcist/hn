import MovieCard from "../MovieCard/MovieCard";

const CardList = ({ items }) => {

    return (
        <div>
            {items?.length &&
                items.map((item, i) => (
                   <MovieCard {...item} key={i} />
                ))
            }
        </div>
    )
}

export default CardList;