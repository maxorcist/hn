const MovieCard = ({ Poster, handleClick }) => {

    return (
        <img
            style={{
                // width: "100px",
                height: "200px",
                marginRight: "20px",
                marginBottom: "10px"
            }}
            src={Poster}
            alt="poster"
            onClick={handleClick}
        />
    )
};

export default MovieCard;