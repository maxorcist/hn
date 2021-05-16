import "./MovieDetail.css";
import {removeFromStorage, saveToStorage, storageContains} from "../../utils/localStorage";

const MovieDetail = ( props ) => {
    const {
        Poster,
        Title,
        Type,
        Year,
        imdbID,
        handleClose,
        onChange,
    } = props;

    const isSaved = storageContains(imdbID);
    const toggleSave = () => {
        isSaved ? removeFromStorage(imdbID) : saveToStorage(props);
        onChange(imdbID);
    }

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
                <button
                    onClick={toggleSave}
                    className="MovieDetail__Fave">
                    {!isSaved ?
                        "Add to favorites"
                        : "Remove from favorites"
                    }
                </button>
            </div>
        </div>
    )
}

export default MovieDetail;