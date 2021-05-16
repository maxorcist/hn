const store = "favoriteMovies"

const getStorage = () => {
    let storage = localStorage.getItem(store) || "{}";
    try {
        storage = JSON.parse(storage)
    } catch (e) {}
    return storage
}
const saveToStorage = ( movie ) => {
    let storage = getStorage();
    storage = {
        ...storage,
        [movie.imdbID]: {...movie},
    }
    localStorage.setItem(store, JSON.stringify(storage))
}
const storageContains = ( imdbID ) => {
    let storage = getStorage();
    return !!storage[imdbID];
}
const removeFromStorage = ( imdbID ) => {
    let storage = getStorage();
    let {[imdbID]: remove, ...rest} = storage;
    localStorage.setItem(store, JSON.stringify(rest))
}

export { saveToStorage, storageContains, removeFromStorage }