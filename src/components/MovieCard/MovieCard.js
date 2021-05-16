import "./MovieCard.css";

const MovieCard = ({Poster, handleClick}) => {

    return (
        <div className="MovieCard" >
            {Poster?.length > 5 && <img
                className="MovieCard__Image"
                src={Poster}
                alt="poster"
                onClick={handleClick}
            />}
        </div>
    )
};

export default MovieCard;