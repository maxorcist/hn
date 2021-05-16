import "./MovieDetail.css";

const MovieDetail = ({Poster, Title, Type, Year, imdbID, handleClose}) => {
    return (
        <div
            className="MovieDetail"
            onClick={handleClose}
        >
            <img
                className="MovieDetail__Poster"
                src={Poster}
                alt="poster"/>
            <div className="MovieDetail__Details">
                <h2 className="MovieDetail__Title">{Title}</h2>
                <h3 className="MovieDetail__Type">{Type}</h3>
                <h3 className="MovieDetail__Year">{Year}</h3>
                <p className="MovieDetail__ID">{imdbID}</p>
                <button className="MovieDetail__Fave">Add to favorites</button>
            </div>
        </div>
    )
}

export default MovieDetail;