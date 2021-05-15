const MovieCard = ({ Poster }) => {

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
        />
    )
};

export default MovieCard;