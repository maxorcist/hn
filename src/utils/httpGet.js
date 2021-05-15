const getId = () => {
    const api_key = process.env.REACT_APP_API_KEY;

    return (
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${api_key}`)
            .then(console.log)
    )
}

const getSearch = (searchString) => {
    const api_key = process.env.REACT_APP_API_KEY;

    return (
        fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=${api_key}&page=1`)
            .then(resp => resp.json())
            .catch(error => error.message)
    )
}

export { getId, getSearch }
