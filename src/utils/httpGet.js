const get = () => {
    const api_key = process.env.REACT_APP_API_KEY;

    return (
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${api_key}`)
            .then(console.log)
    )
}