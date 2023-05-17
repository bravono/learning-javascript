const movie = {
    title: 'Eternal',
    releaseYear: 2020,
    rating: '45%',
    director: "I don't know"
}

function showProperties(movie) {
    for (let key in movie) {
        if (typeof movie[key] === "string" )
            console.log(key, movie[key]);
    }
}

console.log(showProperties(movie))